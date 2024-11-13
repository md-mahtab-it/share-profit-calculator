import { useState, useEffect } from 'react';
import axios from 'axios';
import { TrendingUp, TrendingDown, LineChart, RefreshCw } from 'lucide-react';

interface MarketIndex {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
}

const INDICES = [
  { symbol: 'INX', name: 'S&P 500' },
  { symbol: 'DJI', name: 'Dow Jones' },
  { symbol: 'IXIC', name: 'NASDAQ' },
  { symbol: 'FTSE', name: 'FTSE 100' },
  { symbol: 'N225', name: 'Nikkei 225' }
];

// Initialize fallback data based on INDICES array
const FALLBACK_DATA: MarketIndex[] = INDICES.map(index => ({
  symbol: index.symbol,
  name: index.name,
  price: '0.00',
  change: '0.00',
  changePercent: '0.00'
}));

const ALPHA_VANTAGE_API_KEY = 'ZHQQHAXB9BDWPHNS';

export function MarketIndices() {
  const [indices, setIndices] = useState<MarketIndex[]>(FALLBACK_DATA);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [retryCount, setRetryCount] = useState(0);

  const fetchMarketData = async () => {
    if (loading && retryCount > 0) return;
    
    setLoading(true);
    setError('');
    
    try {
      const results: MarketIndex[] = [...FALLBACK_DATA];
      
      for (let i = 0; i < INDICES.length; i++) {
        const index = INDICES[i];
        try {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=%5E${index.symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`,
            { timeout: 10000 }
          );

          const quote = response.data['Global Quote'];
          
          if (quote && Object.keys(quote).length > 0) {
            results[i] = {
              symbol: index.symbol,
              name: index.name,
              price: parseFloat(quote['05. price']).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
              }),
              change: parseFloat(quote['09. change']).toFixed(2),
              changePercent: quote['10. change percent'].replace('%', '')
            };
          }

          // Add delay between requests to respect rate limits
          if (i < INDICES.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 12000));
          }
          
        } catch (err) {
          console.warn(`Failed to fetch data for ${index.symbol}:`, err);
          // Keep fallback data for this index
        }
      }

      setIndices(results);
      setLastUpdated(new Date());
      setRetryCount(0);
      setError('');
    } catch (err) {
      console.warn('Failed to fetch market data:', err);
      if (retryCount < 3) {
        setRetryCount(prev => prev + 1);
        setTimeout(fetchMarketData, 5000);
      } else {
        setError('Using offline data - API limit reached');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMarketData();
    // Refresh every 15 minutes to stay within API limits
    const interval = setInterval(fetchMarketData, 900000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <LineChart className="h-6 w-6 text-indigo-600" />
          <h3 className="text-lg font-semibold ml-2">Market Indices</h3>
        </div>
        <button 
          onClick={() => {
            setRetryCount(0);
            fetchMarketData();
          }}
          disabled={loading}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          title="Refresh data"
        >
          <RefreshCw className={`h-4 w-4 text-gray-600 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="space-y-4">
        {indices.map((index) => (
          <div key={index.symbol} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-900">{index.name}</p>
                <p className="text-sm text-gray-500">{index.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">{index.price}</p>
                <div className="flex items-center justify-end">
                  {Number(index.change) >= 0 ? (
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                  )}
                  <p className={`text-sm ${Number(index.change) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {index.change} ({index.changePercent}%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
        <p>Last updated: {lastUpdated.toLocaleTimeString()}</p>
        {error && <p className="text-amber-600">{error}</p>}
      </div>
    </div>
  );
}