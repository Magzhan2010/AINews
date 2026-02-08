import { motion } from "framer-motion";
import Footer from "./footer";
const ScIssue = () => {
	return (
		<>
    <section className="relative min-h-screen bg-neutral-950 flex items-center overflow-hidden py-20 bg-[url(/3.jpg)]">
      
      {/* Фоновый декор: имитация шума или сетки */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-[1150px] mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Левая часть: Креативный визуал (Картинка с эффектом) */}
          <motion.div
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 md:order-1"
          >
            {/* Анимированное свечение за картинкой */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-purple-600/30 blur-[60px] rounded-full"
            ></motion.div>
            
            <img 
              src="/ChildAI.webp" // Замени на свою картинку
              alt="Education Crisis" 
              className="relative rounded-lg hover:scale-105 transition-all duration-500 border-2 border-purple-500/30 w-[550px]"
            />
            
            {/* Элемент-декор "Ошибка системы" */}
            <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white px-4 py-2 font-mono text-sm shadow-2xl">
              SYSTEM ERROR: THINKING_NOT_FOUND
            </div>
          </motion.div>

          {/* Правая часть: Контент */}
          <div className="order-1 md:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-8"
            >
              Конец классического <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                образования
              </span>
            </motion.h2>

            <div className="space-y-8">
              {/* Карточка 1: Иллюзия знаний */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group p-6 bg-white/5 border-l-4 border-purple-500 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-purple-400 font-bold text-xl mb-2">Иллюзия знаний</h3>
                <p className="text-gray-400">
                  Зачем учить формулы, если ChatGPT решит задачу по фото? Школьники получают оценки, но теряют самый важный навык — <b>думать самостоятельно</b>.
                </p>
              </motion.div>

              {/* Карточка 2: Цифровой фастфуд */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group p-6 bg-white/5 border-l-4 border-pink-500 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-pink-400 font-bold text-xl mb-2">Цифровой фастфуд</h3>
                <p className="text-gray-400">
                  Мозг привыкает к мгновенным ответам. Без смартфона современный ученик становится беспомощным перед задачей, требующей логической цепочки.
                </p>
              </motion.div>

              {/* Карточка 3: Кризис системы */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="group p-6 bg-white/5 border-l-4 border-white/30 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-white font-bold text-xl mb-2">Кризис контроля</h3>
                <p className="text-gray-400">
                  Учителя больше не проверяют знания — они соревнуются с нейросетями в попытке понять, кто автор текста: человек или алгоритм.
                </p>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
		</>
  )
}

export default ScIssue;