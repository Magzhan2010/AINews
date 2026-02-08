import { motion } from "framer-motion";

const FinalVerdict = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden py-24">
      
      {/* Динамический фон: пульсирующие сферы в глубине */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-[900px] mx-auto px-4 relative z-10 text-center">
        
        {/* Заголовок с эффектом появления букв */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tighter"
        >
          ПОЧЕМУ ЭТО <span className="text-blue-500">ВАЖНО?</span>
        </motion.h2>

        {/* Основной манифест */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-1 w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-12"
        >
          <div className="bg-black/80 backdrop-blur-xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
              Этот ресурс создан, чтобы разобраться: ИИ — это наш самый мощный 
              <span className="text-white font-bold"> «костыль» </span> 
              или инструмент для <span className="text-blue-400 italic">эволюции?</span> 
              Мы анализируем, как не превратиться в «обслуживающий персонал» 
              для нейросетей и сохранить человечность в мире цифр.
            </p>
          </div>
        </motion.div>

        {/* Дополнительный текст (Твои новые смыслы) */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:border-blue-500/50 transition-colors"
          >
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-sm tracking-widest">Адаптация</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Мы не призываем бороться с прогрессом. Мы учим использовать его как рычаг, 
              а не как замену собственному интеллекту. Будущее принадлежит тем, кто задает вопросы, 
              а не тем, кто копирует ответы.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border border-white/10 p-6 rounded-2xl bg-white/5 hover:border-blue-500/50 transition-colors"
          >
            <h4 className="text-blue-400 font-bold mb-2 uppercase text-sm tracking-widest">Критическое мышление</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              В эпоху дипфейков и алгоритмического шума, способность отличать истину от генерации 
              становится главной суперсилой человека. Сохраните свой разум острым.
            </p>
          </motion.div>
        </div>

        {/* Футер-призыв */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 pt-10 border-t border-white/5 text-gray-300 text-sm"
        >
         <p className="text-gray-300 font-medium">
						© 2026 Developed by{' '}
						<span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
							Magzhan Zhenis
						</span>.
					</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#https://t.me/mag1shx" className="hover:text-blue-400 transition-colors">Telegram</a>
            <a href="https://github.com/Magzhan2010" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FinalVerdict;
