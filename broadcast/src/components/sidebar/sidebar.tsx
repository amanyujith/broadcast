interface SidebarProps {
    
    children: React.ReactNode;
  }

const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div>
      <aside className={`h-full transition-all duration-300 `}>
      <nav className="h-full flex flex-col   border-r shadow-sm">
        
        <ul className="flex-1  ">{children}</ul>
       
      </nav>
    </aside>
    </div>
  )
}

export default Sidebar
