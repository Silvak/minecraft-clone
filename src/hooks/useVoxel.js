export const useVoxel = (cellSize) => {
  const matrix = [];
  for (let y = 0; y < cellSize; y++) {
    for (let z = 0; z < cellSize; z++) {
      for (let x = 0; x < cellSize; x++) {
        matrix.push([y, z, x]); // Puedes ajustar las posiciones según tus necesidades
      }
    }
  }
  return matrix; // [[i, j, 0], [i, j, 0], ...]
};

export const useGenerateGeometryCell = (cellX, cellY, cellZ) => {
  const cellSize = 32;

  const startX = cellX * cellSize;
  const startY = cellY * cellSize;
  const startZ = cellZ * cellSize;

  for (let y = 0; y < cellSize; ++y) {
    const voxelY = startY + y;
    for (let z = 0; z < cellSize; ++z) {
      const voxelZ = startZ + z;
      for (let x = 0; x < cellSize; ++x) {
        const voxelX = startX + x;
      }
    }
  }
};

const getVoxel = (x, y, z) => {
  // Implementa la lógica para obtener el voxel en las coordenadas dadas.
  // Esto dependerá de cómo esté estructurado tu estado o datos.
  // Por ejemplo, podrías tener un array tridimensional representando tu mundo voxel.
  // return voxelData[x][y][z];
};
