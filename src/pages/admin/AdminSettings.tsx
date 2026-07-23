import React from 'react';
import { Save, Settings, DollarSign, Bell, Shield, Smartphone } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import toast from 'react-hot-toast';

const AdminSettings = () => {
  const handleSave = () => {
    toast.success('تم تحديث إعدادات المنصة بنجاح');
  };

  return (
    <div className=\"max-w-4xl mx-auto space-y-6\">
      <div className=\"flex flex-col md:flex-row md:items-center justify-between gap-4\">
        <div>
          <h1 className=\"text-2xl font-bold text-gray-900\">إعدادات المنصة</h1>
          <p className=\"text-gray-500 text-sm mt-1\">الإعدادات العامة والمعايير المالية.</p>
        </div>
        <Button onClick={handleSave} className=\"flex items-center gap-2\">
          <Save size={20} />
          حفظ التغييرات
        </Button>
      </div>

      <div className=\"grid grid-cols-1 md:grid-cols-3 gap-6\">
        <div className=\"md:col-span-2 space-y-6\">
          <Card className=\"p-6 space-y-6\">
            <div className=\"flex items-center gap-3 mb-4\">
              <div className=\"w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center\">
                <DollarSign size={20} />
              </div>
              <h2 className=\"text-lg font-bold text-gray-900\">الإعدادات المالية</h2>
            </div>

            <div className=\"grid grid-cols-2 gap-6\">
              <div>
                <label className=\"block text-sm font-bold text-gray-900 mb-1\">عمولة المنصة %</label>
                <p className=\"text-xs text-gray-500 mb-2\">النسبة الافتراضية المقتطعة من التجار.</p>
                <div className=\"relative\">
                  <input type=\"number\" defaultValue=\"15\" className=\"w-full bg-gray-50 border border-gray-100 rounded-xl p-3 pr-8 focus:outline-none focus:border-primary/50 transition-colors\" />
                  <span className=\"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold\">%</span>
                </div>
              </div>
              
              <div>
                <label className=\"block text-sm font-bold text-gray-900 mb-1\">نسبة السائق %</label>
                <p className=\"text-xs text-gray-500 mb-2\">نسبة رسوم التوصيل الممنوحة للسائق.</p>
                <div className=\"relative\">
                  <input type=\"number\" defaultValue=\"80\" className=\"w-full bg-gray-50 border border-gray-100 rounded-xl p-3 pr-8 focus:outline-none focus:border-primary/50 transition-colors\" />
                  <span className=\"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold\">%</span>
                </div>
              </div>

              <div>
                <label className=\"block text-sm font-bold text-gray-900 mb-1\">رمز العملة</label>
                <input type=\"text\" defaultValue=\"MAD\" className=\"w-full bg-gray-50 border border-gray-100 rounded-xl p-3 focus:outline-none focus:border-primary/50 transition-colors\" />
              </div>

              <div>
                <label className=\"block text-sm font-bold text-gray-900 mb-1\">رسوم خدمة العملاء</label>
                <div className=\"relative\">
                  <input type=\"number\" defaultValue=\"2\" className=\"w-full bg-gray-50 border border-gray-100 rounded-xl p-3 pr-12 focus:outline-none focus:border-primary/50 transition-colors\" />
                  <span className=\"absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold\">MAD</span>
                </div>
              </div>
            </div>
          </Card>

          <Card className=\"p-6 space-y-6\">
            <div className=\"flex items-center gap-3 mb-4\">
              <div className=\"w-10 h-10 rounded-xl bg-orange-50 text-primary flex items-center justify-center\">
                <Smartphone size={20} />
              </div>
              <h2 className=\"text-lg font-bold text-gray-900\">إعدادات التطبيق</h2>
            </div>

            <div className=\"space-y-4\">
              <div className=\"flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100\">
                <div>
                  <h3 className=\"font-bold text-gray-900 text-sm\">إجبار تحديث التطبيق</h3>
                  <p className=\"text-xs text-gray-500 mt-1\">إلزام العملاء باستخدام أحدث إصدار من التطبيق.</p>
                </div>
                <label className=\"flex items-center cursor-pointer\">
                  <div className=\"relative\">
                    <input type=\"checkbox\" className=\"sr-only\" />
                    <div className=\"block bg-gray-300 w-10 h-6 rounded-full transition-colors peer-checked:bg-primary\"></div>
                    <div className=\"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-4\"></div>
                  </div>
                </label>
              </div>

              <div className=\"flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100\">
                <div>
                  <h3 className=\"font-bold text-gray-900 text-sm\">تفعيل الدفع عند الاستلام</h3>
                  <p className=\"text-xs text-gray-500 mt-1\">السماح للعملاء بالدفع نقداً.</p>
                </div>
                <label className=\"flex items-center cursor-pointer\">
                  <div className=\"relative\">
                    <input type=\"checkbox\" className=\"sr-only\" defaultChecked />
                    <div className=\"block bg-primary w-10 h-6 rounded-full transition-colors peer-checked:bg-primary\"></div>
                    <div className=\"dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform translate-x-4\"></div>
                  </div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        <div className=\"space-y-6\">
          <Card className=\"p-6\">
            <div className=\"flex items-center gap-3 mb-6\">
              <div className=\"w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center\">
                <Shield size={20} />
              </div>
              <h2 className=\"text-lg font-bold text-gray-900\">حالة المنصة</h2>
            </div>

            <div className=\"p-4 bg-red-50 border border-red-100 rounded-xl text-center\">
              <p className=\"text-sm font-bold text-red-800 mb-3\">مفتاح الطوارئ</p>
              <p className=\"text-xs text-red-600 mb-4\">سيؤدي هذا إلى إيقاف المنصة بالكامل عن العملاء فوراً. ستبقى عمليات التوصيل النشطة قيد التنفيذ.</p>
              <Button variant=\"danger\" fullWidth>إيقاف المنصة</Button>
            </div>
          </Card>
        </div>
      </div>
      
      <style>{`
        input:checked ~ .block { background-color: #FF8A3D !important; }
        input:checked ~ .dot { transform: translateX(1rem) !important; }
      `}</style>
    </div>
  );
};

export default AdminSettings;