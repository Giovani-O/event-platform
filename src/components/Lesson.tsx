import { CheckCircle, Circle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", { 
    locale: ptBR, 
  });

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        { availableDateFormatted }
      </span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-purple-500 transition-color">
        <header className="flex items-center justify-between">
          { isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          { props.type === 'class' ? (
            <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-purple-300 font-bold">
              AULA PRÁTICA
            </span>
          ) : (
            <span className="text-xs rounded px-2 py-[0.125rem] text-white border border-red-600 font-bold flex items-center gap-2">
              <Circle size={14} color="#DC2626" weight="fill" />
              AO VIVO
            </span>
          )}

        </header>

        <strong className="text-gray-200 mt-5 block"> 
          { props.title }
        </strong>
      </div>
    </Link>
  )
}