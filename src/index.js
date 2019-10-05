module.exports = function check(str, bracketsConfig) {
    let count = 0;
    let resultArray = [];

    if((str.length % 2) !== 0) { // сразу проверим на то, что количество элементов в строке четно, чтобы лишний раз не идти на проверку в цикл
        return false
    }

    for(let i = 0; i < str.length; i++) {
        bracketsConfig.forEach((arr, index1, array) => {
            return arr.forEach((arrElem, index2, subArray) => {

                if(str[i] === arrElem) {

                    if(subArray[0] === subArray[1]) {
                        if(index2 === 0) { //чтобы не заходило во второй одинаковый элемент для сравнения с str[i]
                            if(resultArray[resultArray.length - 1] === str[i] ){
                                resultArray.pop();
                            } else {
                                resultArray.push(str[i]);
                            }
                        }

                    } else {
                        if (index2 === 0) {
                            resultArray.push(str[i]);
                        }

                        if (index2 === 1) {
                            if(resultArray[resultArray.length - 1] === array[index1][0])
                                resultArray.pop();
                        }
                    }
                }
            });
        })
    }
    return resultArray.length === 0;

}
