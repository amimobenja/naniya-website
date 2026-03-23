// Professional browser-frame product mockup built with CSS
// Shows a stylized version of the live product UI

interface ProductMockupProps {
  variant: 'chama' | 'lipaclear';
}

export default function ProductMockup({ variant }: ProductMockupProps) {
  if (variant === 'chama') {
    return <ChamaMockup />;
  }
  return <LipaClearMockup />;
}

function BrowserFrame({ children, url, accentColor }: { children: React.ReactNode; url: string; accentColor: string }) {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
      {/* Browser chrome */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 border border-gray-200 font-mono">
          {url}
        </div>
      </div>
      {/* Content */}
      <div className={`bg-gradient-to-br ${accentColor} p-1`}>
        <div className="bg-white rounded-sm">
          {children}
        </div>
      </div>
    </div>
  );
}

function ChamaMockup() {
  return (
    <BrowserFrame url="chama.naniya.co.ke" accentColor="from-green-50 to-emerald-50">
      <div className="p-4 md:p-6 space-y-4">
        {/* Nav bar */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">CP</span>
            </div>
            <span className="font-bold text-sm text-gray-900">ChamaPlatform</span>
          </div>
          <div className="bg-green-600 text-white text-xs px-3 py-1.5 rounded-md font-medium">
            Get Started Free
          </div>
        </div>

        {/* Hero area */}
        <div className="text-center py-3">
          <div className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium mb-3 border border-green-100">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            WhatsApp-First
          </div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Collect Contributions</h2>
          <h2 className="text-lg md:text-xl font-bold text-green-600">The Easy Way</h2>
          <p className="text-xs text-gray-500 mt-2 max-w-xs mx-auto">Paste M-PESA messages and we track who paid — automatically.</p>
        </div>

        {/* Feature cards mini */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { title: 'Event Collections', color: 'bg-green-50 border-green-100' },
            { title: 'M-PESA Auto-Tracking', color: 'bg-emerald-50 border-emerald-100' },
            { title: 'Dashboard & Reports', color: 'bg-teal-50 border-teal-100' },
            { title: 'Chama Automation', color: 'bg-green-50 border-green-100' },
          ].map((item) => (
            <div key={item.title} className={`${item.color} border rounded-lg p-2.5`}>
              <div className="text-xs font-semibold text-gray-800">{item.title}</div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex justify-around py-2 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-bold text-green-600">Free</div>
            <div className="text-[10px] text-gray-500">To Start</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-green-600">M-PESA</div>
            <div className="text-[10px] text-gray-500">Integrated</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-bold text-green-600">WhatsApp</div>
            <div className="text-[10px] text-gray-500">Reminders</div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

function LipaClearMockup() {
  return (
    <BrowserFrame url="lipaclear.naniya.co.ke" accentColor="from-blue-50 to-indigo-50">
      <div className="p-4 md:p-6 space-y-4">
        {/* Nav bar */}
        <div className="flex items-center justify-between pb-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">LC</span>
            </div>
            <span className="font-bold text-sm text-gray-900">LipaClear</span>
          </div>
          <div className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-md font-medium">
            Start Free Trial
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="space-y-3">
          <div className="text-center py-2">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-1">M-PESA Reconciliation</h2>
            <p className="text-xs text-gray-500">Upload CSVs and get instant variance reports</p>
          </div>

          {/* Mini reconciliation table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-xs font-medium px-3 py-2 flex justify-between">
              <span>Reconciliation Summary</span>
              <span>Today</span>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { label: 'Total Transactions', value: '147', status: 'neutral' },
                { label: 'Matched', value: '139', status: 'green' },
                { label: 'Unmatched', value: '5', status: 'yellow' },
                { label: 'Variance', value: '3', status: 'red' },
              ].map((row) => (
                <div key={row.label} className="flex justify-between items-center px-3 py-2 text-xs">
                  <span className="text-gray-600">{row.label}</span>
                  <span className={`font-bold ${
                    row.status === 'green' ? 'text-green-600' :
                    row.status === 'yellow' ? 'text-yellow-600' :
                    row.status === 'red' ? 'text-red-600' :
                    'text-gray-900'
                  }`}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Charts area */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="text-[10px] text-gray-500 mb-2 font-medium">Match Rate</div>
              <div className="flex items-end gap-1 h-10">
                {[60, 75, 85, 90, 95, 94, 97].map((h, i) => (
                  <div key={i} className="flex-1 bg-blue-400 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
              <div className="text-[10px] text-gray-500 mb-2 font-medium">Variance Trend</div>
              <div className="flex items-end gap-1 h-10">
                {[40, 35, 25, 20, 15, 10, 8].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-400 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
