function TableHeader({ children }) {
  return (
    <div className="bg-white border-b border-gray-200 text-gray-600 text-sm md:text-base grid grid-cols-[2fr_1fr_1fr_1fr_1fr_2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr_2fr_1fr_1fr] w-full px-6 py-4 font-bold">
      {children}
    </div>
  );
}

function TableBody({ children }) {
  return <div className="space-y-2 py-2 bg-white">{children}</div>;
}

function TableRow({ children }) {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_2fr_1fr_1fr] md:grid-cols-[2fr_1fr_1fr_1fr_1fr_2fr_1fr_1fr] text-sm md:text-base px-6 py-2 border-b border-gray-200 first:border-t-0 last:border-b-0">
      {children}
    </div>
  );
}

function TableFooter({ children }) {
  return (
    <div className="bg-[#f8f9fa] w-full flex justify-center px-6 py-4 footer">
      {children}
    </div>
  );
}

function Table({ children }) {
  return (
    <div role="table" className="w-full rounded-xl overflow-hidden border">
      {children}
    </div>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Footer = TableFooter;

export default Table;
