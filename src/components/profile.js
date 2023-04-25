export default function ProfileCard({ profile }) {
  return (
    <div className='flex flex-col rounded-2xl bg-white space-y-5 border p-7 w-1/2 shadow-xl'>
      <div className='flex justify-between'>
        <h1>First Name</h1>
        <h1 className='font-bold text-gray-600'>{profile.firstName}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Last Name</h1>
        <h1 className='font-bold text-gray-600'>{profile.lastName}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Email</h1>
        <h1 className='font-bold text-gray-600'>{profile.email}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>College Name</h1>
        <h1 className='font-bold text-gray-600'>{profile.collegeName}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Degree</h1>
        <h1 className='font-bold text-gray-600'>{profile.degree}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Department</h1>
        <h1 className='font-bold text-gray-600'>{profile.department}</h1>
      </div>
      <div className='flex justify-between'>
        <h1>Year Of Study</h1>
        <h1 className='font-bold text-gray-600'>{profile.yearOfStudy}</h1>
      </div>
    </div>
  );
}
