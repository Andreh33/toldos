// Reseñas de demostración. Sustituir / ampliar con reseñas reales cuando el
// cliente las recopile. Quedan publicadas como `approved = 1` para que la home
// no aparezca vacía mientras tanto.
export const REVIEWS_SEED = [
  {
    author: 'Elena R.',
    location: 'Tarragona',
    rating: 5,
    body: 'Pedí presupuesto a varias empresas y los de Toldos Noa fueron los únicos que vinieron a casa a medir antes de pasarme un precio. La instalación impecable, vinieron cuando dijeron y me explicaron cómo funciona el motor. La terraza es otra ahora en verano.',
    service: 'hogar',
    created_at: '2025-07-12',
  },
  {
    author: 'Javier M.',
    location: 'Madrid',
    rating: 5,
    body: 'Tengo un local en el centro de Madrid y necesitaba un toldo robusto y con buena imagen para la fachada. Me asesoraron sin venderme humo, me dieron tres opciones y eligieron conmigo la que mejor encajaba. Tres años después sigue como el primer día.',
    service: 'negocios',
    created_at: '2024-09-03',
  },
  {
    author: 'Lucía G.',
    location: 'Reus, Tarragona',
    rating: 5,
    body: 'Tenía un toldo viejo con la lona rota y media estructura suelta. Pensaba que tenía que cambiarlo entero pero me dijeron que con reparar el brazo y poner lona nueva tiraba años más. Honradez total y precio justo. Lo recomiendo sin dudar.',
    service: 'reparaciones',
    created_at: '2025-04-21',
  },
];

export type Review = {
  id: number;
  author: string;
  location: string;
  rating: number;
  body: string;
  service: string | null;
  created_at: string;
};
