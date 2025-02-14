import React from "react";

export const Footer = () => {
  return (
    <>
      <div class="divider">
        <div class="container">
          <footer class="py-5">
            <div class="row">
              <div class="col-2">
                <h3>Auctioner</h3>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Get what you want at what amount you think its best for.
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-2">
                <h3>About</h3>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Our Story
                    </a>
                  </li>

                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Privacy
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-2">
                <h3>Address</h3>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Kathmandu, Nepal
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div class="d-flex w-100 gap-2">
                    <label for="newsletter1" class="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      class="form-control"
                      placeholder="Email address"
                    />
                    <button class="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div class="d-flex justify-content-between py-4 my-4 border-top">
              <p>© 2021 Company, Inc. All rights reserved.</p>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <svg class="bi" width="24" height="24"></svg>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <svg class="bi" width="24" height="24"></svg>
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#">
                    <svg class="bi" width="24" height="24"></svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
