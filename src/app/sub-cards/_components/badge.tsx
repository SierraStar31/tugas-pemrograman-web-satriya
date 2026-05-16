export default function Badge({name}:{name: string}) {
    return (
         <div className={`bg-orange-300 rounded-2xl p-1`}>
              <p>{name}</p>
            </div>
    )
}