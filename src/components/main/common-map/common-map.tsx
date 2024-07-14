type CommonMap = {
  classNameMap: string;
};

function CommonMap({ classNameMap = 'cities__map' }: CommonMap): JSX.Element {
  const classNameCommonMap = `${classNameMap} map`;

  return (
    <section className={classNameCommonMap}></ section>
  );
}

export default CommonMap;
