import { useEffect } from 'react';

const Polyline = ({ map, maps, path, options }) => {
  useEffect(() => {
    if (!map || !maps) return;

    const polyline = new maps.Polyline({
      path,
      ...options,
      map,
    });

    return () => {
      polyline.setMap(null);
    };
  }, [map, maps, path, options]);

  return null;
};

export default Polyline;
