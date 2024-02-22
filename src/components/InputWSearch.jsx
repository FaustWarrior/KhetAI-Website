import React, {useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../style';


export const InputWSearch = () => {

  const [dataSource, setDataSource] = useState(Array.from({length:5}))
  const items = ['Wheat','Rice', 'Sugarcane', 'Tomato','Potato' ] 


  return (
    <div className='main w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
      <InfiniteScroll dataLength={dataSource.length}>
        {dataSource.map((items, index)=>{return <div className={`${styles.paragraph} text-left max-w-[450px]`}>
        </div>})}
      </InfiniteScroll>
    </div>
  )
}
