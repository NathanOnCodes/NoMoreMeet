import Link from "next/link"

function ButtonNavigate({url, style}) {
  return (
    <Link className={style} href={`/${url}`}>
        Clique Aqui
    </Link>
  )
}

export default ButtonNavigate