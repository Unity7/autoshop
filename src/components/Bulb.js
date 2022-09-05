const Bulb = (props) => {
  return (
    <mesh {...props}>
      <pointLight
        castShadow
        //higher size = better shadow, default was causing low quality
        shadow-mapSize-height={2 ** 10}
        shadow-mapSize-width={2 ** 10}
        shadow-radius={5}
      />
      <sphereBufferGeometry args={[0.2, 20, 20]} />

      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
};

export default Bulb;
