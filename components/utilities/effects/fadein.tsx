import { CSSProperties, ReactNode } from 'react';
import { useInView } from '../hooks/useinveiw'
import styles from '@/styles/utilities/fadein.module.css';

type FadeInSectionProps = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  threshold?: number;
  rootMargin?: string;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  style = {},
  threshold,
  rootMargin,
}) => {
  const [ref, isInView] = useInView({ threshold, rootMargin });

  return (
    <div
      ref={ref}
      className={`${styles.fadeInSection} ${isInView ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default FadeInSection;