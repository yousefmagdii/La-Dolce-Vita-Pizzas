import { Outlet } from 'react-router-dom';
import Header from './Header';
import { useSearch } from '../contexts/SearchContext';
import { SortProvider } from '../contexts/SortContext';

function AppLayout() {
  const { search, setSearch } = useSearch('');
  return (
    <div>
      <Header search={search} setSearch={setSearch} />
      <div className="">
        <main>
          <Outlet search={search} setSearch={setSearch} />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
