import { Request, Response } from 'express'

/**
 * @description
 * Renderiza el index.html
*/
const index = (req: Request, res: Response): void => {
    res.render('index')
}

const calculate = (req: Request, res: Response) => {
    const { range } = req.body;
    const general: string[] = [];
    const numbers: number[] = [3, 5];
    const multiposFive: string[] = [];
    const multiposThree: string[] = [];

    /**
     * @description
     * Para obtener los multiplos de 3 solo consta empezar
     * la iteración en 3 y sumar de 3 en 3.
    */
    for (let value = 3; value <= range; value += 3) {
        multiposThree.push('Música')
    }

    /**
     * @description
     * Para obtener los multiplos de 5 solo consta empezar
     * la iteración en 5 y sumar de 5 en 5.
    */
    for (let value = 5; value <= range; value += 5) {
        multiposFive.push('TI')
    }

    /**
     * @description
     * Para obtener los multiplos de 3 y 5.
    */
    for (let value = 0; value <= range; value++) {
        let counter = 0;
        numbers.some(number => {
            if ((value % number === 0) && counter === 0) {
                general.push('Musical')
                counter++;
            }
        });
    }

    res.render('multiples', { multiposThree, multiposFive, general })
}

export { index, calculate }