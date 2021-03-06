import classNames from 'classnames';
import Tags from './Tags';
import ComplexTitle from './ComplexTitle';

function Selector (props){
  const { title, tags, children, modal, complex} = props;
  const css = classNames({
    'page-tt': title && modal === 'normal' || complex && complex.length,
    'page-tabs-tt': (tags && tags.length) && !title,
    'page-mutil-tt': modal === 'mutil'
  });
  let Component = (!title && (tags && tags.length)) ? Tags : ComplexTitle;
  let select = title ? title : Component(props)
  return (
    <h1
      className={ css }
    >
      { select }
    </h1>
  );
}

export default Selector;
