export const LoadingSpinner = ({ loading }) => {
  return (
    <>
      {loading && <div className='cover-spin' />}
    </>
  )
}