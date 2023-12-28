'use client'
import { useRouter } from 'next/navigation'
const AdminPage = () => {

    const handleBtn=()=>{
        alert('Click me')
    }
    const router = useRouter()
    return (
        <>
        <h1>
            Admin Page
        </h1>
        <button onClick={handleBtn}>Quay lai Page</button>
        <button type="button" onClick={() => router.push('/')}>
      Return use useRouter
    </button>
        </>
        
    )
}
export default AdminPage