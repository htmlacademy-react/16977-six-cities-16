function CommonMap({ classNameMap = 'cities__map' }: { classNameMap: string }): JSX.Element {
  return (
    <section className={classNameMap + ' map'}></section>
  );
}

export default CommonMap;
