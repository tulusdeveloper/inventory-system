import { History } from 'lucide-react'
import React from 'react'

export default function Header() {
  return (
    <div className='bg-slate-300'>
      <div className='flex'>
        {/* Recent Activities */}
        <button>
          <History/>
        </button>
         {/* Search */}
      </div>
      <div className="flex">
         {/* */}
      </div>
    </div>
  )
}
