const Filter = ({ value, onInputFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onInputFilter} />
    </label>
  );
};

export default Filter;
