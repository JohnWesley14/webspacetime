const styles = {
   color: '#F00',
}
interface ButtonProps{
   title: String
}

export function Button( props: ButtonProps) {

  return (
    <div>
      <p style={styles}>{props.title}</p>
    </div>
  )
}
