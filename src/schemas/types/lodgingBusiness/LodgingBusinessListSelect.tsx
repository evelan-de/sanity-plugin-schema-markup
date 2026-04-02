import { StringInputProps } from 'sanity';
import lodgingBusinessTypeList from './list/lodgingBusinessTypeList';
import ListSelection from '../../../components/ListSelection';

const ListDropdown = (props: StringInputProps) => {
  const { onChange, value } = props;

  return <ListSelection list={lodgingBusinessTypeList} onChange={onChange} value={value} />;
};

export default ListDropdown;
