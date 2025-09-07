// TPV WEB Photos
import tpvwebicon from "../../../public/projects/tpvweb/TPV-prototipo7.png"
import tpvwebicon2 from "../../../public/projects/tpvweb/TPV-prototipo1.png"
import tpvwebicon3 from "../../../public/projects/tpvweb/TPV-prototipo2.png"
import tpvwebicon4 from "../../../public/projects/tpvweb/TPV-prototipo3.png"
import tpvwebicon5 from "../../../public/projects/tpvweb/TPV-prototipo4.png"
import tpvwebicon6 from "../../../public/projects/tpvweb/TPV-prototipo5.png"
import tpvwebicon7 from "../../../public/projects/tpvweb/TPV-prototipo6.png"
import tpvwebicon8 from "../../../public/projects/tpvweb/TPV-prototipo8.png"
import tpvwebicon9 from "../../../public/projects/tpvweb/TPV-prototipo9.png"

import pedidosinternos from "../../../public/projects/pedidosinternos/carro-1.png"
import pedidosinternos2 from "../../../public/projects/pedidosinternos/Menu-1.png"
import pedidosinternos3 from "../../../public/projects/pedidosinternos/Menu-2.png"
import pedidosinternos4 from "../../../public/projects/pedidosinternos/Menu-3.png"
import pedidosinternos5 from "../../../public/projects/pedidosinternos/Menu-4.png"
import pedidosinternos6 from "../../../public/projects/pedidosinternos/Modal-1.png"

import smartire from "../../../public/projects/smartirecontrol/Example-1.png"
import smartire2 from "../../../public/projects/smartirecontrol/Example-2.png"
import smartire3 from "../../../public/projects/smartirecontrol/Example-3.png"
import smartire4 from "../../../public/projects/smartirecontrol/Example-4.png"
import smartire5 from "../../../public/projects/smartirecontrol/Example-5.png"
import smartire6 from "../../../public/projects/smartirecontrol/Example-6.png"
import smartire7 from "../../../public/projects/smartirecontrol/Example-7.png"
import smartire8 from "../../../public/projects/smartirecontrol/Example-8.png"
import smartire9 from "../../../public/projects/smartirecontrol/Example-9.png"
import smartire10 from "../../../public/projects/smartirecontrol/Example-10.png"

import managementMonitoring from "../../../public/projects/managment-monitoring/Foto-Prototipo-2.png"
import solucioneserp from "../../../public/projects/solucioneserp/solucionesERP-1.png"
import coolsoft from "../../../public/projects/coolsoft-migration/menu-1.png"
import { projectsData } from "./projects.interface";

export const DATA_PROJECTS: projectsData[] = [
  {
    id: 1,
    title: 'Pedidos Internos',
    text: 'Sistema E-commerce Multi-empresa, diseñado para clientes destacados de la ciudad de San Juan. Utilizando una control centralizado de los productos por cliente utilizando MongoDB, integración de pagos y desarrollo del sistema web.',
    longText: 'Sistema E-commerce Multi-empresa, diseñado para clientes destacados de la ciudad de San Juan, como Resi y Portho. El sistema funcionaba como un tótem interactivo, permitiendo a los clientes seleccionar productos, integración de pasarela de pagos, generación de ticket de compra y administración de pedidos internos por parte de vendedores. Elistema contaba con interfaces gráficas en función del usuario y cliente, como también para un rol de administrador.',
    longTextSecondary: 'El sistema funcionaba como un tótem interactivo, permitiendo a los clientes seleccionar productos, realizar el pago en el momento y generar un ticket de compra, que posteriormente se imprimía y convertía en un pedido para ser entregado por los vendedores. Para ello, el sistema contaba con interfaces tanto para el usuario/cliente como para el administrador. Una de las funcionalidades clave fue la integración de múltiples métodos de pago, incluyendo pagos en caja y Mercado Pago a través de Checkout Pro.',
    addList: true,
    lists: [
      {
        titleList: 'Implementación de integraciones',
        textList: [
          {
            itemtitle: 'Desde el tótem',
            itemText: 'Se generaba un código QR que el cliente escaneaba con su celular para completar el pago mediante Mercado Pago.'
          },
          {
            itemtitle: 'Desde el dispositivo móvil',
            itemText: 'En entornos con mesas enumeradas, cada mesa contaba con un QR que permitía a los clientes acceder al sistema de comercio electrónico desde su celular. Desde allí, podían llamar al mozo, realizar un pedido y elegir la forma de pago: "Pagar en caja" o "Pagar con Mercado Pago". Si el usuario accedía desde un dispositivo móvil y optaba por Mercado Pago, el sistema detectaba automáticamente la plataforma y habilitaba Checkout PRO, optimizando la experiencia de pago.'
          }
        ]
      }
    ],
    images: [pedidosinternos, pedidosinternos2, pedidosinternos3, pedidosinternos4, pedidosinternos5, pedidosinternos6],
    technologies: ['Angular 17', 'TypeScript', '.NET', '.NET Core' , 'Server Side Events', 'MongoDB', 'APIs Mercado Pago']
  },  
  {
    id: 2,
    title: 'SmartTireControl',
    text: 'Sistema de Gestión y Control de Neumáticos OTR (Off-The-Road) Aplicación web desarrollada para la gestión integral y monitoreo del ciclo de vida de neumáticos utilizados en equipos de minería, transporte y servicio pesado.',
    longText: 'Sistema de Gestión y Control de Neumáticos OTR (Off-The-Road) Aplicación web desarrollada para la gestión integral y monitoreo del ciclo de vida de neumáticos utilizados en equipos de minería, transporte y servicio pesado. El sistema permite optimizar la trazabilidad, mantenimiento y análisis de desempeño de cada neumático, contribuyendo directamente a la reducción de costos operativos y la mejora de la eficiencia en terreno.',
    addList: true,
    lists: [],
    images: [smartire, smartire2, smartire3, smartire4, smartire5, smartire6, smartire7, smartire8, smartire9, smartire10],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'RKT Query', 'Redux Toolkit', 'Clean Architecture', 'Pattern Repository']
  },
  {
    id: 3,
    title: 'Terminal Punto de Venta Web (TPV Web)',
    text: 'Terminal Punto de Venta Web (TPV Web) es un sistema web integral para la gestión comercial que permite el procesamiento de pagos, facturación electrónica, gestión y control de inventario, gestión contable y financiera, generación de reportes dinámicos.',
    longText: 'Terminal Punto de Venta Web (TPV Web) es un sistema web integral para la gestión comercial que permite el procesamiento de pagos y facturación electrónica, administración de inventario y movimientos de stock, gestión contable y financiera, generación de reportes comerciales',
    longTextSecondary: 'Software adaptado con mercado objetivo a Estaciones de servicio y combustibles, Comercios minoristas y Empresas de servicios.',
    addList: true,
    lists: [
      {
        titleList: 'Integraciones y funcionalidades destacadas:',
        textList: [
          {
            itemtitle: 'Sistema de reportes avanzado',
            itemText: 'Reportes dinámicos e imprimibles en listados como detalles de comprobantes, resúmenes de cierre diario, movimientos de productos e inventario, análisis de ventas por períodos.'
          },
          {
            itemtitle: 'Módulo de pagos flexible',
            itemText: 'Integración con Mercado Pago y soporte para múltiples medios de pago (efectivo, transferencias, tarjetas).'
          },
          {
            itemtitle: 'Formularios inteligentes',
            itemText: 'Diseño de interfaces optimizadas para procesos comerciales, validación en tiempo real de datos y flujos de trabajo personalizables.'
          },
        ]
      }
    ],
    images: [tpvwebicon,tpvwebicon2,tpvwebicon3,tpvwebicon4,tpvwebicon5,tpvwebicon6,tpvwebicon7,tpvwebicon8,tpvwebicon9],
    technologies: ['Angular 14', 'TypeScript', '.NET', 'SQL Server' , 'Stored Procedures', 'Dynamic Link Library']
  },
  {
    id: 4,
    title: 'Monitoreo de Proyectos',
    text: 'Desarrollo de un proyecto front-end de un sistema integral desde cero, diseñado para centralizar y analizar la información crítica de proyectos, contratos y productos.',
    longText: '',
    addList: false,
    lists: [
      {
        titleList: 'Integraciones y funcionalidades destacadas:',
        textList: [
          {
            itemtitle: 'Visualización de datos y estadísticas',
            itemText: 'herramientas interactivas para el análisis de información.'
          },
          {
            itemtitle: 'Reportes de Carga Dinámica',
            itemText: 'Generación flexible de reportes en tiempo real.'
          },
          {
            itemtitle: 'Maestro de Datos',
            itemText: 'Creación, modificación y eliminación de registros clave.'
          },
          {
            itemtitle: 'Dashboard general',
            itemText: 'Panel de control intuitivo para el análisis de datos.'
          },
        ]
      }
    ],
    images: [managementMonitoring],
    technologies: ['Angular 17', 'TypeScript', 'Tailwind CSS', 'SQL Server', '.NET']
  },
  {
    id: 5,
    title: 'Soluciones ERP',
    text: 'Desarrollo e integración de ERP He participado en el desarrollo e integración de mejoras en sistemas ERP en fases avanzadas, generando nuevas funcionalidades, optimizando el rendimiento y asegurando el mantenimiento del sistema.',
    longText: 'Las soluciones ERP (Enterprise Resource Planning) son sistemas de planificación de recursos empresariales que integran y gestionan todos los procesos clave de una empresa en un solo software. Estas soluciones permiten centralizar información, optimizar operaciones y mejorar la toma de decisiones en áreas como finanzas, inventarios, ventas y producción.',
    longTextSecondary: 'Tengo experiencia en desarrollo e integración de ERP He participado en el desarrollo e integración de mejoras en sistemas ERP en fases avanzadas, generando nuevas funcionalidades, optimizando el rendimiento y asegurando el mantenimiento del sistema.',
    addList: true,
    lists: [
      {
        titleList: 'Integraciones y funcionalidades destacadas:',
        textList: [
          {
            itemtitle: '1',
            itemText: 'Desarrollo de nuevas características y módulos.'
          },
          {
            itemtitle: '2',
            itemText: 'Integración de software con otros sistemas empresariales.'
          },
          {
            itemtitle: '3',
            itemText: 'Optimización y mantenimiento del sistema existente.'
          },
        ]
      },
      {
        titleList: 'Integraciones destacadas',
        textList: [
          {
            itemtitle: '1',
            itemText: 'Maestro de Zona de Ventas para la administración centralizada de sucursales.'
          },
          {
            itemtitle: '2',
            itemText: 'Libros de Compra y Ventas (Cuentas Contables) permitiendo la gestión eficiente de registros contables.'
          },
          {
            itemtitle: '3',
            itemText: 'Módulo de Cobranzas para el procesamiento de pagos de entidades externas.'
          },
        ]
      }
    ],
    images: [solucioneserp],
    technologies: ['HTML', 'CSS','Bootstrap 5','JavaScript', '.NET', 'SQL Server', 'Stored Procedures']
  },
  {
    id: 6,
    title: 'CoolSoft Sistema de Gestión',
    text: 'Sistema Web para la gestión de negocios para una empresa de la ciudad de San Juan. Módulos de Gestión y Control de Inventario, trabajando con tecnologías como Angular 20 + PrimeNG + MySQL + Laravel PHP. ',
    longText: '',
    addList: false,
    lists: [],
    images: [coolsoft],
    technologies: ['Vue3.js','Quasar','Nest.js','MySQL','DBeaver','Angular 20','PrimeNG', 'Tailwind CSS', 'Laravel', 'PHP']
  }

]
