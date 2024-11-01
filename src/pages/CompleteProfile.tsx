import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import userThree from '../images/user/user-03.png';
import Aadhar from '../images/user/AadharProof.png';
import sign from '../images/user/E-signature.png';
import { useNavigate } from 'react-router-dom';

const CompleteProfile: React.FC = () => {
  const [lat, setLat] = useState<number | null>(null);
  const [long, setLong] = useState<number | null>(null);
  const [loading, setLoading] = useState(false); // Add loading state

  const [formData, setFormData] = useState({
    litigant_name: '',
    litigant_email: '',
    litigant_state: '',
    litigant_district: '',
    litigant_gender: '',
    litigant_dob: '',
    litigant_mob: '',
    litigant_lang: '',
    litigant_pinCode: '',
    litigant_lat: '', // Initialize with empty string; you may update later with location
    litigant_long: '', // Initialize with empty string; you may update later with location
  });

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      const data = {
        name: formData.litigant_name,
        email: formData.litigant_email,
        state: formData.litigant_state,
        district: formData.litigant_district,
        gender: formData.litigant_gender,
        Dob: formData.litigant_dob,
        Mobile: formData.litigant_mob,
        Language: formData.litigant_lang,
        pinCode: formData.litigant_pinCode,
        latitude: lat,
        longitude: long,
      };

      console.log('Saved data', data); // make data object and print it overhere
      setLoading(false);
      navigate('/dashboard/CompleteProfile');
    }, 2000);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
          console.log(`Latitude: ${lat} and Longitude: ${long}`);
        },
        (error) => {
          console.error('Error fetching location', error);
        },
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Complete Profile" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_name"
                      id="fullName"
                      placeholder="Devid Jhon"
                      onChange={inputChangeHandler}
                      value={formData.litigant_name}
                    />
                  </div>

                  {/* Email Address */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="email"
                      name="litigant_email"
                      id="emailAddress"
                      placeholder="devidjond45@gmail.com"
                      disabled
                      onChange={inputChangeHandler}
                      value={formData.litigant_email}
                    />
                  </div>

                  {/* State */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_state"
                      id="state"
                      placeholder="State"
                      onChange={inputChangeHandler}
                      value={formData.litigant_state}
                    />
                  </div>

                  {/* District */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="district"
                    >
                      District
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_district"
                      id="district"
                      placeholder="District"
                      onChange={inputChangeHandler}
                      value={formData.litigant_district}
                    />
                  </div>

                  {/* Gender */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="gender"
                    >
                      Gender
                    </label>
                    <select
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      name="litigant_gender"
                      id="gender"
                      value={formData.litigant_gender}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          litigant_gender: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Date of Birth */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="dob"
                    >
                      Date of Birth
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="date"
                      name="litigant_dob"
                      id="dob"
                      value={formData.litigant_dob}
                      onChange={inputChangeHandler}
                    />
                  </div>

                  {/* Mobile */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="mobile"
                    >
                      Mobile
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="tel"
                      name="litigant_mob"
                      id="mobile"
                      placeholder="Mobile Number"
                      value={formData.litigant_mob}
                      onChange={inputChangeHandler}
                    />
                  </div>

                  {/* Language */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="language"
                    >
                      Language
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_lang"
                      id="language"
                      placeholder="Preferred Language"
                      value={formData.litigant_lang}
                      onChange={inputChangeHandler}
                    />
                  </div>

                  {/* Pin Code */}
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="pinCode"
                    >
                      Pin Code
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_pinCode"
                      id="pinCode"
                      placeholder="Pin Code"
                      value={formData.litigant_pinCode}
                      onChange={inputChangeHandler}
                    />
                  </div>

                  {/* Latitude */}
                  <div className="mb-5.5">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_lat"
                      id="lat"
                      onChange={inputChangeHandler}
                      value={lat !== null ? lat.toString() : ''}
                      disabled
                      hidden
                    />
                  </div>

                  {/* Longitude */}
                  <div className="mb-5.5">
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4 text-black"
                      type="text"
                      name="litigant_long"
                      id="long"
                      onChange={inputChangeHandler}
                      value={long !== null ? long.toString() : ''}
                      disabled
                      hidden
                    />
                  </div>

                  {/* Get My Location Button */}
                  <div className="mb-5.5">
                    <button
                      type="button"
                      onClick={getLocation}
                      className="rounded bg-success py-2 px-4 text-white"
                    >
                      Get My Location
                    </button>
                  </div>

                  {/* Buttons for Save Changes and Cancel */}
                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="reset"
                      onClick={() => {
                        setFormData({
                          litigant_name: '',
                          litigant_email: '',
                          litigant_state: '',
                          litigant_district: '',
                          litigant_gender: '',
                          litigant_dob: '',
                          litigant_mob: '',
                          litigant_lang: '',
                          litigant_pinCode: '',
                          litigant_lat: '', // Initialize with empty string; you may update later with location
                          litigant_long: '',
                        });
                      }}
                      disabled={loading} // Disable if loading
                    >
                      Cancel
                    </button>
                    <button
                      className={`flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90 ${
                        loading ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      type="submit"
                      onClick={handleSubmit}
                      disabled={loading} // Disable if loading
                    >
                      {loading ? (
                        <>
                          Loading
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v8H4z"
                            ></path>
                          </svg>
                        </>
                      ) : (
                        'Save Changes'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-3 px-7 dark:border-strokedark"></div>
              <div className="p-5">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full overflow-hidden">
                      <img
                        src={userThree}
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-black dark:text-white">
                        Upload your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      name="litigant_profile"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2V7.33337H14.9997C15.3679 7.33337 15.6663 7.63185 15.6663 8C15.6663 8.36815 15.3679 8.66667 14.9997 8.66667H8.66634V14C8.66634 14.3682 8.36786 14.6667 7.99967 14.6667C7.63148 14.6667 7.33301 14.3682 7.33301 14V8.66667H1.99967C1.63148 8.66667 1.33301 8.36815 1.33301 8C1.33301 7.63185 1.63148 7.33337 1.99967 7.33337H7.99967V2C7.99967 1.63185 8.29815 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <span className="text-center text-sm text-primary">
                        Drag and drop your Photo here
                      </span>
                      <span className="text-center text-sm text-primary">
                        or
                      </span>
                      <span className="text-center text-sm text-primary">
                        Browse
                      </span>
                    </div>
                  </div>

                  {/* New Aadhaar Proof Upload Section */}
                  <div className="mb-5.5 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full overflow-hidden">
                      <img
                        src={Aadhar}
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-black dark:text-white">
                        Aadhaar Proof
                      </h3>
                      <span className="flex gap-2.5 mt-1">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="AadhaarUpload"
                    className="relative block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-5"
                  >
                    <input
                      type="file"
                      accept="application/pdf,image/*"
                      name="litigant_aadhar_proof"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2V7.33337H14.9997C15.3679 7.33337 15.6663 7.63185 15.6663 8C15.6663 8.36815 15.3679 8.66667 14.9997 8.66667H8.66634V14C8.66634 14.3682 8.36786 14.6667 7.99967 14.6667C7.63148 14.6667 7.33301 14.3682 7.33301 14V8.66667H1.99967C1.63148 8.66667 1.33301 8.36815 1.33301 8C1.33301 7.63185 1.63148 7.33337 1.99967 7.33337H7.99967V2C7.99967 1.63185 8.29815 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <span className="text-center text-sm text-primary">
                        Drag and drop your Aadhar Card here
                      </span>
                      <span className="text-center text-sm text-primary">
                        or
                      </span>
                      <span className="text-center text-sm text-primary">
                        Browse
                      </span>
                    </div>
                  </div>

                  {/* E-signature Upload Section */}
                  <div className="mb-5.5 flex items-center gap-3 mt-4">
                    {' '}
                    {/* Increase margin-top to mt-4 */}
                    <div className="h-14 w-14 rounded-full overflow-hidden mt-4">
                      {' '}
                      {/* Increase margin-top to mt-4 */}
                      <img
                        src={sign}
                        alt="User"
                        className="object-cover h-full w-full"
                      />
                    </div>
                    <div className="mt-4">
                      {' '}
                      {/* Increase margin-top to mt-4 */}
                      <h3 className="font-medium text-black dark:text-white">
                        E-signature
                      </h3>
                      <span className="flex gap-2.5 mt-1">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="ESignatureUpload"
                    className="relative block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-5"
                  >
                    <input
                      type="file"
                      accept="application/pdf,image/*"
                      name="litigant_other_document"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                            fill="#3C50E0"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2V7.33337H14.9997C15.3679 7.33337 15.6663 7.63185 15.6663 8C15.6663 8.36815 15.3679 8.66667 14.9997 8.66667H8.66634V14C8.66634 14.3682 8.36786 14.6667 7.99967 14.6667C7.63148 14.6667 7.33301 14.3682 7.33301 14V8.66667H1.99967C1.63148 8.66667 1.33301 8.36815 1.33301 8C1.33301 7.63185 1.63148 7.33337 1.99967 7.33337H7.99967V2C7.99967 1.63185 8.29815 1.33337 7.99967 1.33337Z"
                            fill="#3C50E0"
                          />
                        </svg>
                      </span>
                      <span className="text-center text-sm text-primary">
                        Drag and drop your e-signature here
                      </span>
                      <span className="text-center text-sm text-primary">
                        or
                      </span>
                      <span className="text-center text-sm text-primary">
                        Browse
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
