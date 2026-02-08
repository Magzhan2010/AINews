import { motion } from "framer-motion";

const Hero = () => {
  // Настройки для каскадного появления элементов внутри карточки
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3, // Задержка между появлением заголовка и текста
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[url(/1.jpg)] bg-cover bg-no-repeat bg-center overflow-hidden relative">
      
      {/* Замени свой блок Логотипа на этот */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0c]/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1150px] mx-auto px-4 py-4 flex justify-between items-center">
          <motion.img 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            src="/dls.png" 
            alt="Logo" 
            className="w-[140px] md:w-[180px] object-contain"
          />
          
          {/* Можно добавить имя в хедер справа для стиля */}
          <span className="hidden sm:block text-xs tracking-widest text-gray-400 uppercase font-medium">
            Artificial Intelligence Analysis
          </span>
        </div>
      </div>

      <div className="max-w-[1150px] min-h-screen mx-auto px-4 flex items-center pt-20 sm:pt-0">
        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-y-10">
          
          {/* Левая часть: Контент */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl max-w-[550px] relative z-10"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-black text-white leading-tight"
            >
              Алгоритм вместо совести:
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-blue-300 font-medium py-4"
            >
              Как ИИ незаметно переписывает правила нашей жизни
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <p className="text-lg text-gray-200 leading-relaxed border-l-2 border-blue-500/50 pl-4">
                Мы ждали восстания машин с оружием, а получили тихую цифровую революцию. 
                Пока нейросети пишут код за программистов, мы задаемся вопросом: что останется человеку?
              </p>
            </motion.div>
						
           <motion.a
              href="#about"
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgb(37, 99, 235)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-blue-500 text-white rounded-full font-bold shadow-xl shadow-blue-500/20 inline-block text-center transition-shadow hover:shadow-blue-500/40"
            >
              Узнать больше
            </motion.a>
          </motion.div>

          {/* Правая часть: Картинка */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
            
            <motion.img
              src="/AIDEV.png"
              alt="AI Developers"
              className="sm:w-[550px] w-[320px] rounded-2xl drop-shadow-[0_20px_50px_rgba(59,130,246,0.5)] relative z-10"
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
