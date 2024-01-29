import React, { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts.length > 0) {
      return parsedContacts;
    }

    return [];
  });

  useEffect(() => {
    return localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState('');

  const onAddContact = contactData => {
    setContacts([...contacts, contactData]);
  };

  const onInputFilter = e => {
    setFilter(e.currentTarget.value);

    onCheckFilter(filter);
  };
  const onCheckFilter = filter => {
    const filteredContacts = contacts.filter(item => {
      const contact = item.name.toLowerCase();
      return contact.includes(filter.toLowerCase());
    });

    return filteredContacts;
  };
  const onDeleteContact = id => {
    return setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter onInputFilter={onInputFilter} value={filter} />
      <ContactList
        contacts={onCheckFilter(filter)}
        onDeleteContact={onDeleteContact}
      />
    </>
  );
};

export default App;
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts.length !== prevState.contacts.length) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }
//   onAddContact = contactData => {
//     this.setState({ contacts: [...this.state.contacts, contactData] });
//   };

//   onInputFilter = e => {
//     this.setState({ filter: e.currentTarget.value });

//     this.onCheckFilter(this.state.filter);
//   };

//   onCheckFilter = filter => {
//     const filteredContacts = this.state.contacts.filter(item => {
//       const contact = item.name.toLowerCase();
//       return contact.includes(filter.toLowerCase());
//     });

//     return filteredContacts;
//   };
//   onDeleteContact = id => {
//     return this.setState({
//       contacts: this.state.contacts.filter(contact => contact.id !== id),
//     });
//   };
//   render() {
//     return (
//       <>
//         <h1>Phonebook</h1>
//         <ContactForm
//           onAddContact={this.onAddContact}
//           contacts={this.state.contacts}
//         />

//         <h2>Contacts</h2>
//         <Filter onInputFilter={this.onInputFilter} value={this.state.filter} />
//         <ContactList
//           contacts={this.onCheckFilter(this.state.filter)}
//           onDeleteContact={this.onDeleteContact}
//         />
//       </>
//     );
//   }
// }
