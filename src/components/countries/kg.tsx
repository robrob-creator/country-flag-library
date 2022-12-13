export interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  style?: {};
}

export const KG = ({ width, height, className, style }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 600"
      width={width}
      height={height}
      className={className}
      style={style}
    >
      <path d="M0 0h1000v600H0z" fill="#ee2737" />
      <path
        d="M454.869 259.272a212.984 212.984 0 0 0-35.225-17.443 96.751 96.751 0 0 0-16.6 54.36 95.623 95.623 0 0 0 4.4 28.79 183.176 183.176 0 0 1 19.306-33.87 188.2 188.2 0 0 1 28.112-31.837zm-29.806-24.556a227.569 227.569 0 0 1 38.1 17.443c2.71-2.37 5.588-4.4 8.3-6.435a220.4 220.4 0 0 0-40.644-17.274 66.644 66.644 0 0 0-5.756 6.266zm11.855-12.023a205.352 205.352 0 0 1 43.522 16.934c3.218-2.032 6.436-3.9 9.484-5.757a209.853 209.853 0 0 0-45.894-16.77 57.418 57.418 0 0 0-7.112 5.593zm14.394-10.161a200.127 200.127 0 0 1 48.265 16.257 205.183 205.183 0 0 1 48.264-16.257 95.84 95.84 0 0 0-96.529 0zm103.81 4.742a209.362 209.362 0 0 0-45.893 16.6q4.8 2.786 9.484 5.757a212.648 212.648 0 0 1 43.522-16.934 43.84 43.84 0 0 0-7.112-5.42zm13.21 11.346a213.242 213.242 0 0 0-40.644 17.1q4.341 3.075 8.468 6.435a219.876 219.876 0 0 1 37.934-17.443 39.13 39.13 0 0 0-5.758-6.1zM579.509 242a198.143 198.143 0 0 0-35.055 17.274 195.967 195.967 0 0 1 28.112 31.837 204.792 204.792 0 0 1 19.3 33.87 102.057 102.057 0 0 0 4.234-28.79 95.8 95.8 0 0 0-16.6-54.19zm-8.3 66.385a203.994 203.994 0 0 0-35.9-43.353c-3.048 2.2-6.266 4.4-9.145 6.6a208.151 208.151 0 0 1 53.006 79.255 104.379 104.379 0 0 0 7.282-12.532 227.025 227.025 0 0 0-15.241-29.974zm-53.684-44.03c3.049-2.2 6.1-4.4 9.315-6.436-2.71-2.37-5.589-4.572-8.468-6.774-3.217 2.032-6.435 4.064-9.653 6.266h.17c2.879 2.2 5.758 4.572 8.636 6.943zM499.577 250.8c3.217-2.032 6.6-4.064 9.652-5.927-3.217-2.032-6.435-4.064-9.652-5.927-3.218 1.863-6.266 3.9-9.484 5.927 3.218 1.867 6.266 3.899 9.484 5.927zm-9.145 6.6c-3.218-2.2-6.266-4.234-9.484-6.266l-8.636 6.6c3.217 2.2 6.265 4.233 9.314 6.435q4.293-3.514 8.806-6.76zm9.145 6.774c-2.88 2.2-5.758 4.572-8.806 7.113 3.048 2.37 5.927 4.91 8.806 7.45 2.879-2.54 5.757-5.08 8.806-7.45-2.883-2.362-5.758-4.903-8.806-7.104zm0 31.668a213.908 213.908 0 0 0-33.362 47.587 204.883 204.883 0 0 0-14.9 36.579 98.054 98.054 0 0 0 96.529 0 204.923 204.923 0 0 0-14.9-36.58 208.55 208.55 0 0 0-33.361-47.586zm-55.885 64.183a216.307 216.307 0 0 1 47.248-72.99c-2.88-2.709-5.758-5.249-8.806-7.958a214.083 214.083 0 0 0-53.176 82.81 94.385 94.385 0 0 0 10.33 9.823c1.356-3.895 2.88-7.79 4.4-11.685zm64.521-72.99a219.329 219.329 0 0 1 47.418 72.99c1.524 3.895 2.879 7.79 4.233 11.685a96.1 96.1 0 0 0 10.5-9.822 216.39 216.39 0 0 0-53.345-82.811c-3.048 2.71-5.927 5.25-8.806 7.959zm-88.23 63.845a205.977 205.977 0 0 1 53.175-79.08q-4.551-3.529-9.314-6.774a209.336 209.336 0 0 0-35.9 43.522 215.033 215.033 0 0 0-15.24 29.805 92.591 92.591 0 0 0 7.281 12.532zm80.1-159.187a108.214 108.214 0 1 1-108.212 108.222A108.411 108.411 0 0 1 500.085 191.7zm47.756-23.709a64.006 64.006 0 0 0-9.822 15.41 10.268 10.268 0 0 1-.34-6.434c.848-7.79 3.05-12.532 7.114-19.137 1.354-2.37 2.71-4.4 3.386-6.943a29.569 29.569 0 0 0-3.556-25.74 32.8 32.8 0 0 1-4.91 21 9.883 9.883 0 0 1-1.694 2.033 64.124 64.124 0 0 0-11.347 13.886 66.348 66.348 0 0 0-7.451 16.765 10.154 10.154 0 0 1-1.185-6.1c-.34-7.96 1.016-12.87 3.9-20.152a29.348 29.348 0 0 0 2.37-7.452c1.186-7.79-.846-17.781-7.62-24.725a32.732 32.732 0 0 1-1.524 21.508 25.107 25.107 0 0 1-1.355 2.2 72.819 72.819 0 0 0-9.145 15.41 74.049 74.049 0 0 0-4.572 17.782 9.719 9.719 0 0 1-2.2-5.927c-1.524-7.79-1.016-12.87.678-20.49a23.172 23.172 0 0 0 1.185-7.622A29.922 29.922 0 0 0 488.4 119.9a33.264 33.264 0 0 1 1.862 21.677c-.338.677-.677 1.524-1.016 2.2-2.032 4.234-4.4 8.3-6.6 16.766a73.969 73.969 0 0 0-1.863 18.29 12.98 12.98 0 0 1-3.048-5.42c-2.71-7.62-3.049-12.531-2.371-20.49a38.12 38.12 0 0 0 0-7.621c-1.355-7.96-6.435-16.766-14.9-21.338a33.207 33.207 0 0 1 5.08 21l-.507 2.54a72.925 72.925 0 0 0-3.895 17.612 65.576 65.576 0 0 0 1.016 18.29 12.57 12.57 0 0 1-3.9-4.911c-3.895-7.113-4.911-12.024-5.589-19.814a23.306 23.306 0 0 0-1.355-7.62c-2.37-7.621-8.806-15.58-17.95-18.629 5.927 6.6 8.3 14.225 8.3 19.814a12.767 12.767 0 0 1-.17 2.54 74.437 74.437 0 0 0-1.016 17.951 71.985 71.985 0 0 0 3.9 17.95 12.469 12.469 0 0 1-4.742-4.233c-4.91-6.266-6.6-11.007-8.467-18.628a29.783 29.783 0 0 0-2.54-7.451c-3.557-6.944-11.177-13.887-20.66-15.58 6.773 5.757 10.33 13.04 11.346 18.458a12.846 12.846 0 0 1 .169 2.54 83.487 83.487 0 0 0 1.863 17.952 65.417 65.417 0 0 0 6.6 16.934 12.125 12.125 0 0 1-5.25-3.387c-5.927-5.419-8.467-9.822-11.346-17.1a33.571 33.571 0 0 0-3.556-6.943c-4.742-6.266-13.21-11.854-23.031-12.024 7.79 4.573 12.362 11.008 14.225 16.258l.508 2.54c.847 4.572 1.355 9.314 4.572 17.443a65.848 65.848 0 0 0 9.314 15.75 11.651 11.651 0 0 1-5.757-2.541c-6.6-4.4-9.823-8.467-14.056-15.072a23.853 23.853 0 0 0-4.573-6.266c-5.588-5.588-14.9-9.822-24.555-8.467 8.3 3.387 13.886 9.144 16.6 14.056.339.677.677 1.524 1.016 2.37 1.524 4.234 2.71 8.807 7.113 16.427a67.506 67.506 0 0 0 11.685 14.225 13.8 13.8 0 0 1-6.1-1.693c-7.282-3.387-11.007-6.774-16.088-12.7a43.648 43.648 0 0 0-5.588-5.589c-6.436-4.572-16.258-7.282-25.572-4.4 8.806 2.032 15.241 6.774 18.459 11.177a5.989 5.989 0 0 1 1.355 2.2 72.624 72.624 0 0 0 9.822 15.072 62.541 62.541 0 0 0 13.548 12.362 12.172 12.172 0 0 1-6.266-.847c-7.62-2.032-11.854-4.91-17.782-9.991a42.4 42.4 0 0 0-6.265-4.572 30.439 30.439 0 0 0-26.08-.34 33.142 33.142 0 0 1 20.152 8.13 21.069 21.069 0 0 1 1.524 2.032c2.88 3.556 5.42 7.62 12.024 13.378a69.273 69.273 0 0 0 15.41 9.992 11.186 11.186 0 0 1-6.265.17c-7.96-.848-12.532-3.05-19.306-7.114-2.37-1.354-4.4-2.71-6.943-3.387a29.214 29.214 0 0 0-25.572 3.557 33.1 33.1 0 0 1 21 4.91 8.92 8.92 0 0 1 1.862 1.694c3.387 3.218 6.605 6.774 13.887 11.347a63.269 63.269 0 0 0 16.765 7.451 11.6 11.6 0 0 1-6.1 1.355c-7.96.17-12.87-1.186-20.152-4.065a29.348 29.348 0 0 0-7.452-2.37c-7.79-1.186-17.781.846-24.725 7.62 8.637-2.2 16.6-.847 21.508 1.524a25.107 25.107 0 0 1 2.2 1.355 65.712 65.712 0 0 0 33.192 13.717 9.637 9.637 0 0 1-5.757 2.2c-7.96 1.693-12.87 1.016-20.66-.678a28.669 28.669 0 0 0-7.622-1.185c-7.959 0-17.442 3.556-23.2 11.346a32.716 32.716 0 0 1 21.507-1.862c.847.338 1.524.677 2.37 1.016a72.4 72.4 0 0 0 16.766 6.6 71.521 71.521 0 0 0 18.12 1.863 12.97 12.97 0 0 1-5.419 3.048c-7.451 2.71-12.531 3.049-20.321 2.371a39.836 39.836 0 0 0-7.79 0c-7.79 1.355-16.6 6.435-21.169 15.072a32 32 0 0 1 21-5.25c.846.17 1.523.339 2.37.508a66.758 66.758 0 0 0 35.9 2.879 12.57 12.57 0 0 1-4.911 3.9c-6.943 3.895-12.024 4.911-19.814 5.589a37.707 37.707 0 0 0-7.62 1.355 29.558 29.558 0 0 0-18.629 17.95 32.612 32.612 0 0 1 19.983-8.3 12.762 12.762 0 0 1 2.54.17 73.086 73.086 0 0 0 17.951 1.016 62.916 62.916 0 0 0 17.782-3.9 10.208 10.208 0 0 1-4.234 4.742c-6.266 4.91-11.007 6.6-18.628 8.467a28.622 28.622 0 0 0-7.282 2.54 29.7 29.7 0 0 0-15.58 20.66 32.675 32.675 0 0 1 18.29-11.346 12.836 12.836 0 0 1 2.54-.169 82.544 82.544 0 0 0 17.95-1.863 68.517 68.517 0 0 0 17.1-6.6 11.645 11.645 0 0 1-3.557 5.25c-5.419 5.927-9.822 8.467-17.1 11.346a51.654 51.654 0 0 0-6.774 3.556c-6.435 4.742-12.023 13.21-12.193 23.031a32.483 32.483 0 0 1 16.427-14.225c.847-.17 1.524-.339 2.37-.508 4.573-.847 9.315-1.355 17.444-4.572a74.691 74.691 0 0 0 15.918-9.145 12.188 12.188 0 0 1-2.71 5.588c-4.4 6.6-8.3 9.823-15.071 14.056a31.062 31.062 0 0 0-6.266 4.573 29.842 29.842 0 0 0-8.3 24.555 32.5 32.5 0 0 1 13.887-16.6c.846-.339 1.524-.677 2.37-1.016a65.767 65.767 0 0 0 16.427-7.113 67.506 67.506 0 0 0 14.225-11.685 10.449 10.449 0 0 1-1.693 6.1c-3.387 7.282-6.774 11.007-12.7 16.088a33.818 33.818 0 0 0-5.42 5.588c-4.572 6.436-7.281 16.258-4.4 25.572 1.862-8.806 6.6-15.241 11.177-18.459a14.1 14.1 0 0 1 2.032-1.355 77.442 77.442 0 0 0 15.241-9.822 67.248 67.248 0 0 0 12.193-13.548 13.743 13.743 0 0 1-.677 6.266c-2.2 7.62-4.911 11.854-10.161 17.782a28.794 28.794 0 0 0-4.4 6.435c-3.556 7.112-4.742 17.1-.508 25.91.677-8.975 4.4-16.088 8.3-19.983a8.9 8.9 0 0 1 1.863-1.694c3.725-2.878 7.62-5.419 13.378-12.023a69.273 69.273 0 0 0 9.992-15.41 12.884 12.884 0 0 1 .338 6.265c-1.016 7.96-3.048 12.532-7.112 19.306a29.951 29.951 0 0 0-3.557 6.943c-2.37 7.62-1.862 17.781 3.726 25.74-.847-8.975 1.694-16.6 4.911-21.168a18.02 18.02 0 0 1 1.524-1.862c3.218-3.387 6.774-6.605 11.516-13.887a69.983 69.983 0 0 0 7.282-16.765 11.6 11.6 0 0 1 1.355 6.1c.338 7.96-1.016 12.87-4.065 20.152a38.155 38.155 0 0 0-2.37 7.452c-1.186 7.79.846 17.781 7.62 24.725-2.2-8.637-.847-16.6 1.694-21.508a9.1 9.1 0 0 1 1.185-2.2 64.507 64.507 0 0 0 9.145-15.58 62.869 62.869 0 0 0 4.742-17.612 12.444 12.444 0 0 1 2.2 5.757c1.524 7.96 1.016 12.87-.847 20.66a28.669 28.669 0 0 0-1.185 7.622 29.551 29.551 0 0 0 11.516 23.2c-3.557-8.128-3.557-16.088-1.863-21.507a13.266 13.266 0 0 1 .847-2.37 72.4 72.4 0 0 0 6.6-16.766 71.521 71.521 0 0 0 1.863-18.12 11.374 11.374 0 0 1 3.048 5.419c2.88 7.451 3.049 12.531 2.54 20.49a23.036 23.036 0 0 0 0 7.621 29.518 29.518 0 0 0 14.9 21.338c-4.742-7.62-5.927-15.58-5.08-21a6.788 6.788 0 0 1 .508-2.54 73.022 73.022 0 0 0 3.895-17.612 82.079 82.079 0 0 0-1.016-18.29 14.327 14.327 0 0 1 3.895 4.911c3.895 6.943 4.91 12.024 5.588 19.814a28.649 28.649 0 0 0 1.186 7.62 29.838 29.838 0 0 0 18.12 18.629c-5.927-6.774-8.3-14.395-8.468-19.983a12.762 12.762 0 0 1 .17-2.54 65.456 65.456 0 0 0 1.016-17.951 68.014 68.014 0 0 0-3.726-17.782 11.926 11.926 0 0 1 4.573 4.234c4.91 6.266 6.773 11.007 8.636 18.628a28.216 28.216 0 0 0 2.371 7.282c3.726 7.113 11.177 13.887 20.83 15.58a32.143 32.143 0 0 1-11.516-18.29 12.836 12.836 0 0 1-.169-2.54 71.544 71.544 0 0 0-1.694-17.95 70.172 70.172 0 0 0-6.773-17.1 10.815 10.815 0 0 1 5.25 3.557c5.927 5.419 8.467 9.822 11.515 17.1a28.917 28.917 0 0 0 3.556 6.774c4.742 6.435 13.21 12.023 22.862 12.193a32.882 32.882 0 0 1-14.056-16.427 12.511 12.511 0 0 1-.677-2.37 67.988 67.988 0 0 0-4.572-17.444 64.281 64.281 0 0 0-9.145-15.75 10.327 10.327 0 0 1 5.758 2.541c6.6 4.4 9.822 8.3 13.886 15.072a32.987 32.987 0 0 0 4.573 6.266 29.842 29.842 0 0 0 24.555 8.3c-8.3-3.218-13.886-8.975-16.427-13.887a7.182 7.182 0 0 1-1.016-2.37 75.232 75.232 0 0 0-7.282-16.427 71.444 71.444 0 0 0-11.515-14.225 12.82 12.82 0 0 1 6.1 1.693c7.113 3.387 11.008 6.774 16.088 12.7a27.422 27.422 0 0 0 5.42 5.42 30.107 30.107 0 0 0 25.57 4.572c-8.636-2.032-15.071-6.774-18.458-11.347a14.1 14.1 0 0 1-1.355-2.032c-2.2-4.064-4.064-8.467-9.653-15.241a74.309 74.309 0 0 0-13.717-12.193 13.521 13.521 0 0 1 6.266.677c7.62 2.2 11.854 5.08 17.95 10.161a32.128 32.128 0 0 0 6.267 4.4c7.112 3.556 17.1 4.742 25.91.508-8.975-.677-15.919-4.4-19.983-8.3a8.9 8.9 0 0 1-1.694-1.863 72.18 72.18 0 0 0-11.854-13.378 78.442 78.442 0 0 0-15.41-9.992 12.753 12.753 0 0 1 6.265-.338c7.79 1.016 12.532 3.048 19.137 7.282a37.616 37.616 0 0 0 6.943 3.387c7.62 2.37 17.781 1.862 25.74-3.726-8.975.847-16.426-1.694-21-4.911l-2.033-1.524a69.024 69.024 0 0 0-13.884-11.523 67.01 67.01 0 0 0-16.766-7.282 11.994 11.994 0 0 1 6.1-1.355c8.129-.338 13.04 1.016 20.152 4.065a38.155 38.155 0 0 0 7.452 2.37c7.79 1.186 17.781-.846 24.725-7.62-8.637 2.2-16.427.847-21.508-1.694a13.935 13.935 0 0 1-2.2-1.185 72.819 72.819 0 0 0-15.41-9.145 79.119 79.119 0 0 0-17.782-4.742 12.41 12.41 0 0 1 5.927-2.2c7.79-1.524 12.87-1.016 20.49.847a28.669 28.669 0 0 0 7.622 1.185A30.46 30.46 0 0 0 680.1 288.4c-8.3 3.387-16.258 3.387-21.508 1.693a9.806 9.806 0 0 1-2.37-.847c-4.234-2.032-8.3-4.4-16.766-6.6a73.008 73.008 0 0 0-18.29-1.863 11.382 11.382 0 0 1 5.42-3.048c7.62-2.88 12.7-3.049 20.49-2.54a24.069 24.069 0 0 0 7.79 0 29.554 29.554 0 0 0 21.17-14.9c-7.621 4.742-15.411 5.927-21 5.25a14.137 14.137 0 0 1-2.54-.678 73.256 73.256 0 0 0-17.443-3.9 74.033 74.033 0 0 0-18.29 1.186 10.812 10.812 0 0 1 4.912-4.065c6.943-3.9 11.854-4.91 19.644-5.588a28.649 28.649 0 0 0 7.62-1.186c7.621-2.54 15.58-8.806 18.629-18.12a32.169 32.169 0 0 1-19.814 8.468 12.767 12.767 0 0 1-2.54-.17c-4.573-.677-9.314-1.693-17.951-1.016a65.05 65.05 0 0 0-17.95 3.9 12.469 12.469 0 0 1 4.233-4.742c6.266-4.91 11.007-6.773 18.628-8.636a29.383 29.383 0 0 0 7.451-2.371c6.944-3.726 13.887-11.177 15.58-20.83-5.757 6.943-12.87 10.5-18.459 11.516a12.836 12.836 0 0 1-2.54.169 69.777 69.777 0 0 0-17.781 1.694 65.31 65.31 0 0 0-17.1 6.773 10.465 10.465 0 0 1 3.387-5.25c5.419-5.927 9.822-8.467 17.1-11.515a26.949 26.949 0 0 0 6.943-3.556c6.266-4.742 11.854-13.21 12.024-22.862-4.573 7.62-11.008 12.193-16.258 14.056a14.111 14.111 0 0 1-2.54.677c-4.572.847-9.314 1.355-17.443 4.572a71.108 71.108 0 0 0-15.75 9.145 12.344 12.344 0 0 1 2.541-5.758c4.4-6.6 8.467-9.822 15.072-13.886a28.412 28.412 0 0 0 6.266-4.573c5.588-5.588 9.822-14.9 8.467-24.555-3.387 8.3-9.144 13.886-14.056 16.6a11.78 11.78 0 0 1-2.2.847 79.394 79.394 0 0 0-16.6 7.282 71.444 71.444 0 0 0-14.225 11.515 13.751 13.751 0 0 1 1.693-5.927c3.387-7.282 6.774-11.007 12.7-16.257a33.783 33.783 0 0 0 5.589-5.42c4.572-6.435 7.282-16.257 4.4-25.57-2.033 8.636-6.774 15.071-11.177 18.458a9.625 9.625 0 0 1-2.2 1.355c-4.064 2.2-8.467 4.064-15.072 9.653a63.753 63.753 0 0 0-12.186 13.706 10.309 10.309 0 0 1 .678-6.266c2.2-7.62 4.91-11.854 9.991-17.95 1.694-2.033 3.387-3.727 4.572-6.267a30.062 30.062 0 0 0 .34-25.91 31.664 31.664 0 0 1-8.13 19.983 17 17 0 0 1-1.862 1.694 68.229 68.229 0 0 0-13.548 12.023z"
        fill="#fedd00"
      />
    </svg>
  );
};
