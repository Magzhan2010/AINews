import { motion } from "framer-motion";

const About = () => {
  // Настройки анимации для списка
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="bg-[url(/2.jpg)] bg-cover bg-no-repeat bg-center min-h-screen flex items-center relative">
      {/* Затемнение фона для читаемости */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>

      <div className="max-w-[1150px] mx-auto px-4 py-20 w-full relative z-10">
        
        {/* Заголовок с анимацией появления снизу и свечением */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            Прощай, «коддинг»? <br />
            <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
              Разработчики под ударом
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 font-light max-w-3xl border-l-4 border-red-500 pl-6">
            Еще вчера программисты были элитой рынка. Сегодня их заменяют строчки алгоритмов.
          </p>
        </motion.div>

        {/* Контентная сетка */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Список карточек */}
          <motion.ul 
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { title: "Реальность", text: "Нейросеть пишет базу за секунды. То, на что уходила неделя, теперь делает один человек с подпиской.", color: "bg-blue-500/20" },
              { title: "Угроза", text: "Джунам больше нет места. Зачем учить человека, если робот не ошибается в синтаксисе?", color: "bg-purple-500/20" },
              { title: "Итог", text: "Профессия не умирает, но становится «холодной». Вместо творчества — сухая проверка кода машины.", color: "bg-red-500/20" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                variants={listItem}
                whileHover={{ x: 10 }}
                className={`p-6 ${item.color} backdrop-blur-md border border-white/10 rounded-xl shadow-lg`}
              >
                <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-widest">{item.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Изображение с эффектом "всплытия" и рамкой */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/issueAi.jpg" 
              alt="Issue AI" 
              className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover w-full h-[400px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
