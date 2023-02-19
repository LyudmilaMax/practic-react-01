import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={title ? css.superSection : css.baseSection}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </section>
  );
};

export default Section;
