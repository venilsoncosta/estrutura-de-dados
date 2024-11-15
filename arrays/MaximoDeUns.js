
const encontrarSequenciaMaximaDeum = (nums) => {
    let maxUm = 0;
    let sequenciaAtualDeUm = 0;

    for(let value of nums) {
        if(value === 1){
            sequenciaAtualDeUm++;
        }
        if(value !== 1 && sequenciaAtualDeUm > 0){
            if(sequenciaAtualDeUm > maxUm){
                maxUm = sequenciaAtualDeUm;
            }
            sequenciaAtualDeUm = 0;
        }
    }
    if( sequenciaAtualDeUm > maxUm){
        maxUm = sequenciaAtualDeUm;
    }

    return maxUm;
}

const nums = [1, 1, 0, 1, 1, 1, 5, 1, 1, 1, 1];

console.log(encontrarSequenciaMaximaDeum(nums));
