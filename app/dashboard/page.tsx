import Documents from "@/components/Documents"

function DashBoard() {
  return (
    <div className="h-full max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-[#0F3AAE]">
        My Documents
      </h1>
      
      <Documents />
    </div>
  )
}

export default DashBoard
