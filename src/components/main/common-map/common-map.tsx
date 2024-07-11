function CommonMap({ classNameMap = 'cities__map' }: { classNameMap: string }): JSX.Element {
  const classNameCommonMap = `${classNameMap} map`;

  return (
    <section className={classNameCommonMap}></ section>
  );
}

export default CommonMap;
