import css from './ContactFilter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/filterSlice/filterSlice';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactFilter = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.length > 0 && (
        <div>
          <h2>Contacts 📑</h2>
          <label className={css.filterLabel}>Find contacts by name </label>
          <input
            className={css.filterName}
            type="text"
            name="filter"
            onChange={e => {
              const { value } = e.target;
              const action = filterContact(value);
              dispatch(action);
            }}
          />
        </div>
      )}
    </>
  );
};
