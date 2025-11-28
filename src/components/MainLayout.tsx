import { Outlet } from 'react-router-dom';
import DockBar from './DockBar';

export default function MainLayout() {
  return (
    <div className="bg-white relative size-full flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      {/* Dock Bar */}
      <DockBar />
    </div>
  );
}
