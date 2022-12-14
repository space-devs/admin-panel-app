import { Tabs } from '@common'
import { Toolbar, AddCategory } from '@content'

import styles from './Catalog.module.scss'

const Catalog = () => {
  return (
    <>
      <Toolbar
        title='Все категории'
        count='124'
      >
        <AddCategory />
      </Toolbar>

      <Tabs
        className={styles.vertical}
        tool
      >
        <div label='Электроника'>
          <h6>Стиральные и сушильные машины (категория 2 уровень)</h6>
          <h6>Пылесосы и аксессуары (категория 2 уровень)</h6>
          <h6>Холодильники (категория 2 уровень)</h6>
        </div>
        <div label='Бытовая техника'>
          <h6>Cушильные машины (категория 2 уровень)</h6>
          <h6>Пылесосы (категория 2 уровень)</h6>
          <h6>Мелкая бытовая техника (категория 2 уровень)</h6>
        </div>
        <div label='Текстильная продукция'>
          <h6>Текстильные изделия (категория 2 уровень)</h6>
          <h6>Одежда (категория 2 уровень)</h6>
          <h6>Обувь (категория 2 уровень)</h6>
        </div>
        <div label='Одежда'>
          <h6>Одежда (категория 2 уровень)</h6>
          <h6>Обувь (категория 2 уровень)</h6>
        </div>
        <div label='Мебель'>
          <h6>Мебель (категория 2 уровень)</h6>
        </div>
        <div label='Ювелирная продукция'>
          <h6>Ювелирные изделия (категория 2 уровень)</h6>
        </div>
      </Tabs>
    </>
  )
}

export default Catalog
