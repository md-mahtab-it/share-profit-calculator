import { useState } from 'react';
import { 
  Calculator as CalcIcon, 
  DollarSign, 
  Percent, 
  TrendingUp, 
  RefreshCcw,
  ArrowDownRight,
  ArrowUpRight,
  Wallet,
  PiggyBank,
  BarChart,
  TrendingDown,
  Receipt,
  CreditCard
} from 'lucide-react';

type CommissionType = '$' | '%';

const currencySymbols: Record<string, string> = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AUD: '$',
  JPY: '¥'
};

interface CommissionInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: CommissionType;
  onTypeChange: (type: CommissionType) => void;
  currencySymbol: string;
}

const CommissionInput = ({ 
  label, 
  value, 
  onChange, 
  type, 
  onTypeChange,
  currencySymbol 
}: CommissionInputProps) => (
  <div className="flex items-center space-x-2">
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-24 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      placeholder="0.00"
    />
    <div className="flex rounded-md shadow-sm">
      <button
        type="button"
        onClick={() => onTypeChange('$')}
        className={`px-3 py-2 text-sm font-medium rounded-l-md border ${
          type === '$' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300'
        }`}
      >
        {currencySymbol}
      </button>
      <button
        type="button"
        onClick={() => onTypeChange('%')}
        className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
          type === '%' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300'
        }`}
      >
        %
      </button>
    </div>
  </div>
);

export function Calculator() {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [shares, setShares] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [buyCommissionType, setBuyCommissionType] = useState<CommissionType>('$');
  const [sellCommissionType, setSellCommissionType] = useState<CommissionType>('$');
  const [buyCommission, setBuyCommission] = useState('9.99');
  const [sellCommission, setSellCommission] = useState('9.99');
  const [cgtRate, setCgtRate] = useState('30');
  const [currency, setCurrency] = useState('USD');

  const currencySymbol = currencySymbols[currency];

  const calculate = () => {
    const numShares = Number(shares);
    const buyPrice = Number(purchasePrice);
    const sellPrice = Number(sellingPrice);
    
    const buyCommissionAmount = buyCommissionType === '$' 
      ? Number(buyCommission)
      : (buyPrice * numShares * Number(buyCommission)) / 100;
      
    const sellCommissionAmount = sellCommissionType === '$'
      ? Number(sellCommission)
      : (sellPrice * numShares * Number(sellCommission)) / 100;

    const totalBuyCost = (buyPrice * numShares) + buyCommissionAmount;
    const totalSellProceeds = (sellPrice * numShares) - sellCommissionAmount;
    const grossProfit = totalSellProceeds - totalBuyCost;
    
    const cgtAmount = (grossProfit > 0) ? (grossProfit * Number(cgtRate)) / 100 : 0;
    const netProfit = grossProfit - cgtAmount;
    
    const roi = ((netProfit / totalBuyCost) * 100).toFixed(2);
    const priceChange = (((sellPrice - buyPrice) / buyPrice) * 100).toFixed(2);

    return {
      totalBuyCost: totalBuyCost.toFixed(2),
      totalSellProceeds: totalSellProceeds.toFixed(2),
      buyCommissionAmount: buyCommissionAmount.toFixed(2),
      sellCommissionAmount: sellCommissionAmount.toFixed(2),
      grossProfit: grossProfit.toFixed(2),
      cgtAmount: cgtAmount.toFixed(2),
      netProfit: netProfit.toFixed(2),
      roi,
      priceChange
    };
  };

  const results = purchasePrice && shares && sellingPrice ? calculate() : null;

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-xl p-6">
        <div className="flex items-center mb-6">
          <CalcIcon className="h-8 w-8 text-indigo-600" />
          <h2 className="text-2xl font-bold ml-2">Advanced Stock Profit Calculator</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Purchase Price Per Share</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                {currencySymbol}
              </div>
              <input
                type="number"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="pl-8 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0.00"
                style={{ paddingLeft: '2rem' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Number of Shares</label>
            <div className="relative">
              <TrendingUp className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              <input
                type="number"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0"
                style={{ paddingLeft: '2.5rem' }}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price Per Share</label>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none select-none">
                {currencySymbol}
              </div>
              <input
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="pl-8 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="0.00"
                style={{ paddingLeft: '2rem' }}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Buy Commission</label>
              <CommissionInput
                label="Buy Commission"
                value={buyCommission}
                onChange={setBuyCommission}
                type={buyCommissionType}
                onTypeChange={setBuyCommissionType}
                currencySymbol={currencySymbol}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sell Commission</label>
              <CommissionInput
                label="Sell Commission"
                value={sellCommission}
                onChange={setSellCommission}
                type={sellCommissionType}
                onTypeChange={setSellCommissionType}
                currencySymbol={currencySymbol}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">CGT Rate (%)</label>
              <div className="relative">
                <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
                <input
                  type="number"
                  value={cgtRate}
                  onChange={(e) => setCgtRate(e.target.value)}
                  className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="30"
                  style={{ paddingLeft: '2.5rem' }}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="USD">USD ($)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
                <option value="AUD">AUD ($)</option>
                <option value="JPY">JPY (¥)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {results && (
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <PiggyBank className="h-6 w-6 text-indigo-600 mr-2" />
            Investment Summary
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center mb-1">
                  <ArrowDownRight className="h-4 w-4 text-gray-600 mr-1" />
                  <p className="text-sm text-gray-600">Total Buy Cost</p>
                </div>
                <p className="text-lg font-semibold">{currencySymbol} {results.totalBuyCost}</p>
                <p className="text-xs text-gray-500">Inc. commission: {currencySymbol} {results.buyCommissionAmount}</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <ArrowUpRight className="h-4 w-4 text-gray-600 mr-1" />
                  <p className="text-sm text-gray-600">Total Sell Proceeds</p>
                </div>
                <p className="text-lg font-semibold">{currencySymbol} {results.totalSellProceeds}</p>
                <p className="text-xs text-gray-500">Inc. commission: {currencySymbol} {results.sellCommissionAmount}</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center mb-1">
                    <Wallet className="h-4 w-4 text-gray-600 mr-1" />
                    <p className="text-sm text-gray-600">Gross Profit/Loss</p>
                  </div>
                  <p className={`text-lg font-semibold ${Number(results.grossProfit) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {currencySymbol} {results.grossProfit}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <Receipt className="h-4 w-4 text-gray-600 mr-1" />
                    <p className="text-sm text-gray-600">CGT Amount</p>
                  </div>
                  <p className="text-lg font-semibold text-orange-600">
                    {currencySymbol} {results.cgtAmount}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="flex items-center mb-1">
                    <CreditCard className="h-4 w-4 text-gray-600 mr-1" />
                    <p className="text-sm text-gray-600">Net Profit/Loss</p>
                  </div>
                  <p className={`text-xl font-bold ${Number(results.netProfit) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {currencySymbol} {results.netProfit}
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <BarChart className="h-4 w-4 text-gray-600 mr-1" />
                    <p className="text-sm text-gray-600">ROI</p>
                  </div>
                  <p className={`text-xl font-bold ${Number(results.roi) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.roi}%
                  </p>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    {Number(results.priceChange) >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-gray-600 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-gray-600 mr-1" />
                    )}
                    <p className="text-sm text-gray-600">Price Change</p>
                  </div>
                  <p className={`text-xl font-bold ${Number(results.priceChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.priceChange}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}