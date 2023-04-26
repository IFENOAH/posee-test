import * as Icon from 'react-feather'

interface IInputProps {
  placeholder: string;
  label?: string;
  type: string;
  readOnly?: boolean;
  required?: boolean;
  onChange?: () => void;
}

export const CustomInput = ({placeholder, label, type, readOnly, required, onChange, ...rest}: IInputProps) => {

  return (
    <label className='w-full flex items-center py-3 px-4 py-1 border border-doc-bgg rounded-md focus:border-none focus:!outline-0'>
    <Icon.Search 
      size={15}
      style={{
        color: 'gray',
        width: '20px',
        paddingRight: "5px"
      }} 
    />
    <input
      type='search'
      name='search'
      placeholder={placeholder}
      onChange={onChange}
      className = 'outline-0 focus:ring-0 ring-0 focus:bg-0 focus:border-0 focus:outline-0 w-full border-none text-xs text-gray-900'
    />
  </label>
    );
};