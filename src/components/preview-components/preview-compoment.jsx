import React from 'react';
import './collection-preview.styles.scss';
import CollectionItems from '../collection-items/collection-item'

const PreviewCollection =({title, items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item,ind)=>ind<4).map(({id,...itemprops })=>(
                  <CollectionItems key={id}  {...itemprops}/>
            ))}

        </div>
    </div>
)

export default PreviewCollection;