import { useSelector } from "react-redux";
import css from './RightSideBar2.module.css';


export const RightSideBar = () => {

    const date = useSelector((state) => state.products.date);
    const dailyRate = useSelector((state) => state.auth.userInfo.dailyRate);
    const notAllowedProducts = useSelector((state) => state.auth.userInfo.notAllowedProducts);
    const productsList = useSelector((state) => state.products.productsList);

    // Через useSelector зі state (відповідь від бекенду) получаємо: 
    // date - актуальна дата
    // dailyRate - щоденна норма споживання (з модалки) 
    // notAllowedProducts - нерекомендовані продукти
    // productsList - список продуктів з калоріями
    const totalCalories = productsList.map(product => product.productCalories)
        .reduce((prev, product) => { return Number.parseInt(prev) + Number.parseInt(product) }, 0);
    // totalCalories - загальна кількість калорій у вибраних продуктах
    // Перебираємо масив вибраних продуктів по калоріям та підсумовуємо іч.
    const leftCalories = dailyRate - totalCalories;
    // leftCalories - залишок щодених калорій (різниця між днівною нормою та вибраними продуктами)
    const nOfNorm = (totalCalories / dailyRate) * 100;
    // nOfNorm - відсоток споживання від щоденої норми
    return (
        <div className={css.wrapper} >
            <div className={css.summaryWrap}>
                <h3 className={css.title}>Summary for {date}</h3>
                <ul>
                    <li className={css.item}>
                        <p className={css.text}>Left</p>
                        {leftCalories < 0 ?
                            <p className={css.redtext}>{leftCalories} kcal</p> :
                //  умова - якщо залишок від'ємний, то виводимо дані червоним шрифтом
                            <p className={css.text}>{leftCalories ? leftCalories : '000'} kcal</p>
                //  умова - якщо залишок є, то виводимо його, якщо нема то 000                
                        }
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Consumed</p>
                        <p className={css.text}>{totalCalories ? totalCalories : '000'} kcal</p>
                {/* умова - вібір продуктів є, то виводимо його, якщо нема то 000  */}
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>Daily rate</p>
                        <p className={css.text}>{dailyRate ? dailyRate : '000'} kcal</p>
                {/* умова - щоденна норма є, то виводимо його, якщо нема то 000  */}
                    </li>
                    <li className={css.item}>
                        <p className={css.text}>n% of normal</p>
                           {nOfNorm > 100 ?
                            <p className={css.redtext}>{nOfNorm ? Math.round(nOfNorm) : '0'} %</p> :
                //  умова - якщо відсоток більше 100, то виводимо дані червоним шрифтом 
                // округлене до найближчого цілого числа (Math.round)
                            <p className={css.text}>{nOfNorm ? Math.round(nOfNorm) : '0'} %</p> 
                //  умова - якщо відсоток є, то виводимо його, якщо нема то 0  
                //  округлене до найближчого цілого числа (Math.round)
                        }
                    </li>
                </ul>
            </div>
            <div className={css.foodwrap}>
                <h3 className={css.title}>Food not recommended</h3>
                {notAllowedProducts ? 
                    <ul>
                        {notAllowedProducts.map((prod, index) => (
                            <p className={css.text} key={index}>
                                {index + 1}. {prod}
                            </p>
                        ))}
                    </ul> :
                // умова -  якщо список не рєкомендованих продуктів є,то перебираємо його
                // та виводимо списком з порядковим номером
                    <p className={css.text}>Your diet will be displayed here</p>
                // умова -  якщо списка не рєкомендованих продуктів нє має,то виводимо повідомлення    
                }
            </div>
        </div>
    )
};