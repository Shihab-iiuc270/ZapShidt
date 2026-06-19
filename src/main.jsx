import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.jsx'
import AuthProvider from './contexts/AuthContext/AuthProvider.jsx'
import { ToastContainer } from "react-toastify";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />

      <ToastContainer
        position="top-center"
        autoClose={3000}
      />
    </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)
