import Sheet from './components/Sheet';
export default function App() {
  return (
    <div className="grid grid-cols-10 gap-4  h-screen m-2">
      <div className="col-span-2 bg-green-500 ">Toolz</div>
      <div className="col-span-8 ">
        <Sheet/>
      </div>
    </div>
  );
}