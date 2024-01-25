const ContactList = ({ contacts, onDeleteContact }) => {
  return contacts.length === 0 ? (
    <p>Oops... you don`t have any contacts.</p>
  ) : (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
