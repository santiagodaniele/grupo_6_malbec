-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: openbar_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `cart_details`
--

LOCK TABLES `cart_details` WRITE;
/*!40000 ALTER TABLE `cart_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'vinos-blancos'),(2,'vinos-tintos'),(3,'cervezas'),(4,'spirits');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fond de Cave reserva','Trapiche',998.19,'De color rojo púrpura intenso con matices rubí, este Malbec expresa aromas a mermelada de frutas negras y liqueur, con un toque elegante de humo, vainilla y chocolate. En boca tiene un gusto seco, con un final largo y aterciopelado.',10,30,2,1,1,'img-tinto-malbec-impuro.jpg'),(2,'Impuro','Trapiche',834.80,'Este vino presenta un color púrpura profundo con matices rubí. Entrega complejos aromas de frutas negras, con un toque de especies mentoladas, que juntos integran sutiles notas florales. En boca es voluminoso y aterciopelado, con un perfecto balance entre sabores frutados y roble.',30,35,2,1,1,'img-tinto-malbec-impuro.jpg'),(3,'Fincas Notables','El Esteco',2873.67,'Color: profundo fondo negro y reflejos violetas. Limpio y brillante. Con lágrimas coloreadas y espesas. Concentrado. Joven. Aroma: concentrado. Muy frutado y con notas florales. Ciruelas, pasas de uvas, leves notas de hierbas, con las notas delicadas de roble aportado por su añejamiento en barricas. Sabor: entrada con mucho volumen, con taninos dulces, maduros y muy redondos. Vibrante y frutado. Armónico, rico, roble integrado. Vino concentrado, de persistencia larga y elegante.',15,30,2,2,15,'img-blanco-sauvignon-fond-de-cave.jpg'),(4,'Gran Medalla','Trapiche',3816.28,'De color púrpura profundo, este Cabernet Sauvignon entrega aromas de frutas negras, violetas y un toque de grosellas negras, moras y notas balsámicas. De cuerpo completo en el paladar, con generosos sabores frutados, una textura aterciopelada y un final puro y persistente.',50,35,2,2,15,'img-tinto-cabernet-gran-medalla.jpg'),(5,'Fond de Cave Reserva','Trapiche',998.19,'De color amarillo pálido con reflejos verdosos, este vino entrega aromas intensos de ruda, hierbas frescas, frutas tropicales y notas de pomelo rosado. En boca se presenta con mucho volumen, resaltando la frescura y la persistencia.',20,70,1,1,2,'img-blanco-sauvignon-fond-de-cave.jpg'),(6,'Los Intocables','Fincas Las Moras',899.02,'Complejo Chardonnay de color ámbar oscuro y carácter expresivo. Su cuidada elaboración, inspirada en los destilados más prestigiosos del mundo, contempla una maduración del vino en barricas de roble Bourbon que han aportado características particulares. En nariz se destacan aromas a ananá maduro combinadas con la vainilla, caramelo y notas ahumadas del contacto con barricas de Missouri. En boca es untuoso con un dulce y persistente final.',25,70,1,1,3,'img-blanco-chardonnay-los-intocables.jpg'),(7,'Gran Medalla 2014','Trapiche',3816.28,'Este Chardonnay expresa aromas de frutas tropicales, combinados con notas cítricas y de azahares y un leve toque de especias, madreselva y brioche. De gran concentración de fruta en boca, es fresco y de carácter mineral, con un final sensacional.',15,70,1,2,3,'img-blanco-chardonnay-gran-medalla-2014.jpg'),(8,'Don David','El Esteco',998.19,'Vista: Suave dorado, muy brillante con marcados tonos verdosos. Marcadas lágrimas en la copa. Aroma: Delicado aroma varietal, con notas a manzanas, ananá, frutos tropicales, miel y notas sutiles de vainilla. Sabor: Equilibrada acidez, paladar suave entregado por la fermentación maloláctica. Frutado, pera, ananá, nueces y leves percepciones lácticas.',10,70,1,2,3,'img-blanco-sauvignon-don-david.jpg'),(9,'Hefeweizen Dunkel 0,5L','SCHÖFFERHOFER',735.00,'Aroma a plátano afrutado, levemente torrefacto. Su color es de un marrón turbio achocolatado sobre el que se posa elegantemente una nube de espuma blanquecina que se funde con el color. Una vez en la boca denota un sabor cítrico con leves tintes de chocolate, sin excesivo cuerpo, que mantiene una composición burbujeante y espumosa en la boca y regala un final ácido característico.',50,20,3,1,14,'img-cerveza-negra-schofferhofer.jpg'),(10,'Grolsh','Grolsh',398.00,'Grolsch es una cerveza Premium lager holandesa que cuenta con 400 años de historia. Si bien se comenzó a fabricar en el país, esta versión sigue fabricándose en Holanda, conservando toda la esencia de la marca. De color dorado, esta cerveza tiene dos variedades de lúpulo que le otorgan sabor y aroma que se traducen en frescura.',60,20,3,1,4,'img-cerveza-rubia-grolsch.jpg'),(11,'Antares Kolsch 500Ml','Antares',314.00,'Existen muchas cervezas doradas y refrescantes. Pero frutadas y con destellos finales de lúpulo, sólo hay un estilo: la Kölsch. En Antares rescatamos la antigua receta de la cerveza favorita de los bebedores en Colonia, Alemania, y la honramos desde 1998. En nuestra cocina, su legado sigue intacto.',80,10,3,2,4,'img-cerveza-rubia-kolsch.jpg'),(12,'Morena Oro 330ml','Morena',160.00,'Un Lager para los paladares más exigentes con fuertes notas de malta, el color dorado le da las características de una verdadera Reina. Sabor intenso con aromas que van desde notas de vainilla hasta el de clavo. Se perciben los sabores de los mejores lúpulos superaromáticos, con una espuma rica y persistente',50,10,3,2,5,'img-cerveza-rubia-morena.jpg'),(13,'Schöfferhofer Hefeweizen 500Ml','SCHÖFFERHOFER',480.00,'Gracias al alto contenido en lúpulo, tiene un sabor con más cuerpo en comparación con otras cervezas pero lleno de frescor y de agridulce afrutado. Visualmente hablando, da gusto verla: su color ámbar brillante es único.',20,20,3,2,6,'img-cerveza-rubia-schofferhofer.jpg'),(14,'Jameson 750Ml','Jameson',3150.00,'Es un whiskey irlandés añejado en barricas impregnados de Pale Ale irlandesa. Su sabor es a lúpulo y cítricos suaves con notas de hierbas dulces y delicados tonos especiados. La persistencia de la fruta fresca y el lúpulo dan paso a los granos de cebada y a su acabado suave y característico.',10,10,4,2,12,'img-spirit-whisky-jameson.jpg'),(15,'Jack Daniel\'s 750Ml','Jack Daniel\'s',2100.00,'FILTRADO EN CARBÓN. GOTA A GOTA. Suavizado gota a gota a través de tres metros de carbón de arce de azúcar, tras lo cual es madurado en barriles hechos a mano.',10,10,4,2,13,'img-spirit-whisky-jack-daniels.jpg'),(16,'JW Black Label 750Ml','Johnnie Walker',6.07,'Whisky rico, complejo y bien balanceado, un blend con notas a frutos del bosque, vainilla y tierra ahumada. Volumen de alcohol: 40 %. País de origen: Escocia. Tipo de tapa: Tapa rosca.',5,5,4,2,12,'img-spirit-whisky-jhonnie-walker-black-label.jpg'),(17,'JW Red Label 750Ml','Johnnie Walker',3152.93,'Se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor.',10,10,4,2,12,'img-spirit-whisky-jhonnie-walker-red-label.jpg'),(18,'Smirnoff 21 700Ml','Smirnoff',931.50,'El vodka Smirnoff N° 21 es el vodka N° 1 del mundo. Este galardonado vodka tiene un sabor robusto con un acabado seco para una máxima suavidad y claridad. Triplemente destilado y filtrado 10 veces, es perfecto con hielo o en tu cóctel favorito.',10,10,4,2,11,'img-spirit-vodka-smirnoff-21.jpg'),(19,'Ron Zacapa 750M','Zacapa',98721.00,'Zacapa xo es un ron ultra-premium elaborado a partir de una mezcla de rones añejados entre 6 y 25 años, con un añejamiento adicional en barricas de roble francés utilizadas previamente para envejecer coñac que revelan aromas de picotas y especias.',10,20,4,2,10,'img-spirit-ron-zacapa.jpg'),(20,'Gin Gordon\'s','Gordons',1251.00,'Según su fabricante, la ginebra Gordon\'s es de triple destilación y está aromatizada con bayas de enebro, semillas de cilantro, raíz de angélica, regaliz, raíz de lirio, cáscara de naranja y limón; la receta exacta ha sido un secreto desde 1769.',20,15,4,1,9,'img-spirit-gin-gordons.jpg'),(21,'Gin Tanqueray Dry','Tanqueray',3128.00,'Es una ginebra de enebro con sabores distintivos de enebro a pino y fina ralladura de limón. Son estos botánicos perfectamente equilibrados de enebro, cilantro, angélica y regaliz los que crean una base clásica para cada cóctel de ginebra sin dominarlo.',20,20,4,1,8,'image-1655733172217.jpg'),(22,'Estrella Galicia 300Ml','Galicia',159.10,'La Cerveza Estrella Galicia es una cerveza española de estilo Premium Lager. Se caracteriza por su color dorado y su aroma y sabor a lúpulos característicos.',15,20,3,2,4,'img-cerveza-rubia-galicia.jpg'),(23,'Rabieta Red Irish','Rabieta',388.00,'Una cerveza completa de cuerpo medio, es una cerveza fácil de tomar con un dulzor especial proveniente de la malta caramelo.',15,10,3,2,7,'img-cerveza-irish-rabieta.jpg'),(24,'Corona 330Ml','Corona',189.00,'Corona es una cerveza premium, clásica y auténtica, reconocida mundialmente por su alta calidad, su sabor distintivo e imagen. Es una cerveza premium que te invita a cortar con la rutina y vivir un rato de relax.',10,10,3,2,4,'img-cerveza-rubia-corona.jpg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `subcategory`
--

LOCK TABLES `subcategory` WRITE;
/*!40000 ALTER TABLE `subcategory` DISABLE KEYS */;
INSERT INTO `subcategory` VALUES (1,'destacados'),(2,'');
/*!40000 ALTER TABLE `subcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `variety`
--

LOCK TABLES `variety` WRITE;
/*!40000 ALTER TABLE `variety` DISABLE KEYS */;
INSERT INTO `variety` VALUES (1,'Malbec'),(2,'Sauvignon Blanc'),(3,'Chardonnay'),(4,'Rubia'),(5,'Morena'),(6,'Hefeweizen'),(7,'Ambar'),(8,'Gin'),(9,'Ginebra'),(10,'Ron'),(11,'Vodka'),(12,'Whisky Blend'),(13,'Whisky Bourbon'),(14,'Dunkelweizen'),(15,'Cabernet Sauvignon');
/*!40000 ALTER TABLE `variety` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-08  0:32:09
