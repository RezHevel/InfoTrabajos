const TRADES=[{icon:"droplets",label:"Plomería",count:318},{icon:"zap",label:"Electricidad",count:264},{icon:"brick-wall",label:"Albañilería",count:190},{icon:"hammer",label:"Carpintería",count:143},{icon:"paint-roller",label:"Pintura",count:128},{icon:"sprout",label:"Jardinería",count:97},{icon:"spray-can",label:"Limpieza",count:212},{icon:"wrench",label:"Mantenimiento",count:88}];
const WORKERS=[
 {id:1,name:"Marta Quiñones",trade:"Electricista",tradeIcon:"zap",rating:4.8,reviews:126,zone:"Chapalita, Zapopan",distance:"2.4 km",rate:"$450/h",available:true,verified:true,skills:["Tableros","Urgencias 24 h","Certificada"],bio:"Doce años instalando y reparando tableros en casa habitación y comercios. Trabajo con material propio y entrego reporte de seguridad eléctrica.",jobs:184,since:"2019"},
 {id:2,name:"Ramiro Solís",trade:"Plomero",tradeIcon:"droplets",rating:4.6,reviews:78,zone:"Tlaquepaque",distance:"3.1 km",rate:"$380/h",available:true,verified:true,skills:["Destapados","Gas","Boilers"],bio:"Plomería domiciliaria e instalación de gas con certificado.",jobs:96,since:"2021"},
 {id:3,name:"Lucía Ferreyra",trade:"Pintora",tradeIcon:"paint-roller",rating:5,reviews:41,zone:"Providencia, GDL",distance:"5.8 km",rate:"$320/h",available:false,verified:false,skills:["Interiores","Impermeabilización"],bio:"Pintura de interiores y fachadas. Cotización sin costo.",jobs:53,since:"2023"},
 {id:4,name:"Diego Ocampo",trade:"Albañil",tradeIcon:"brick-wall",rating:4.4,reviews:63,zone:"Tonalá",distance:"7.2 km",rate:"$400/h",available:true,verified:true,skills:["Remodelación","Loseta"],bio:"Remodelaciones y ampliaciones con equipo propio.",jobs:71,since:"2020"}];
const REQUESTS=[
 {id:"SOL-20469",title:"Cambiar boiler de 40 L",category:"Plomería",zone:"Providencia, GDL",budget:"$3,200",posted:"hace 2 h",offers:4,urgent:true,state:"abierta",description:"Boiler de paso eléctrico, el equipo ya está comprado."},
 {id:"SOL-20455",title:"Instalar 6 luminarias LED en oficina",category:"Electricidad",zone:"Centro, GDL",budget:"$2,400",posted:"hace 5 h",offers:7,state:"abierta",description:"Plafón desmontable, 60 m²."},
 {id:"SOL-20390",title:"Reparar filtración en techo de lámina",category:"Albañilería",zone:"Tlaquepaque",budget:"$6,500",posted:"ayer",offers:2,state:"en_curso",description:"Filtra sobre la cocina cuando llueve fuerte."}];
const QUOTES=[
 {id:"COT-4421",worker:WORKERS[1],request:"Cambiar boiler de 40 L",amount:"$2,850",days:"Mañana, 9:00–11:00",note:"Incluye mano de obra, conexiones nuevas y retiro del boiler viejo.",state:"nueva"},
 {id:"COT-4418",worker:WORKERS[0],request:"Cambiar boiler de 40 L",amount:"$3,100",days:"Jueves por la tarde",note:"Incluye revisión de la pastilla y garantía de 6 meses.",state:"nueva"},
 {id:"COT-4402",worker:WORKERS[3],request:"Cambiar boiler de 40 L",amount:"$2,400",days:"Sábado 10:00",note:"Sin material, solo instalación.",state:"vista"}];
const MESSAGES=[
 {from:"them",time:"10:38",text:"Buenas, vi tu solicitud del boiler."},
 {from:"them",time:"10:40",text:"¿Mañana a las 9 te funciona? Llevo llave de paso y conexiones nuevas."},
 {from:"me",time:"10:42",text:"Perfecto, te espero. Av. Guadalupe 1240, interior 3B.",read:true}];
const REVIEWS=[
 {author:"Julián R.",rating:5,date:"mar 2026",job:"Instalación de tablero",verified:true,text:"Puntual y ordenada. Dejó todo limpio y explicó cada cambio antes de hacerlo."},
 {author:"Cecilia A.",rating:4,date:"feb 2026",job:"Cambio de luminarias",verified:true,text:"Buen trabajo. Llegó media hora tarde pero avisó por mensaje."},
 {author:"Hernán V.",rating:5,date:"ene 2026",job:"Urgencia: corte total",verified:true,text:"Vino un domingo por la noche y lo resolvió en una hora."}];
const HISTORY=[
 {title:"Instalación de tablero",worker:"Marta Quiñones",date:"12 mar 2026",amount:"$4,600",rated:5},
 {title:"Destape de drenaje",worker:"Ramiro Solís",date:"28 feb 2026",amount:"$1,150",rated:4},
 {title:"Pintura de recámara",worker:"Lucía Ferreyra",date:"9 feb 2026",amount:"$3,900",rated:null}];
Object.assign(window,{TRADES,WORKERS,REQUESTS,QUOTES,MESSAGES,REVIEWS,HISTORY});
