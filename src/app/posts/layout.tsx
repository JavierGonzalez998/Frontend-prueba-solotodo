import Box from "@mui/material/Box"
import Nav from "@/components/nav/nav"
import { Container } from "@mui/material"
export default function DashboardLayout({
    children, 
  }: {
    children: React.ReactNode
  }) {
    return (
      <Box sx={{backgroundImage:"url('/pattern.svg')", height: "100vh"}}>
        <Nav/>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{mt: 2}}>
            <Box width="70vw" height="90vh" bgcolor="white" color="black">
                {children} 
            </Box>
        </Box>
      </Box>
    )
  }