import { useId } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeNameFilter, changePhoneFilter } from '../../redux/filters/slice'
import { selectNameFilter, selectPhoneFilter } from '../../redux/filters/selectors'
import css from './SearchBox.module.css'

export default function SearchBox(){

    const nameId = useId()
    // const phoneId = useId()
    const dispatch = useDispatch()
    const nameFilter = useSelector(selectNameFilter);
    // const phoneFilter = useSelector(selectPhoneFilter);

    const handleNameFilter = (e) => dispatch(changeNameFilter(e.target.value))
    // const handlePhoneFilter = (e) => dispatch(changePhoneFilter(e.target.value))
    
    return (
        <div>
            <p className={css.findTitle}>Find contacts by name or phone</p>
            <input type="text" id={nameId} value={nameFilter} onChange={handleNameFilter} placeholder="Name" className={css.searchInput}/>
            {/* <input type="text" id={phoneId} value={phoneFilter} onChange={handlePhoneFilter} placeholder="Phone" className={css.searchInput}/> */}
        </div>
    )
}